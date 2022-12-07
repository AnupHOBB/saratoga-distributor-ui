const { Observable, timer } = rxjs
const { delay } = rxjs.operators

const IMAGE_PREFIX = "loading-screen-icon/LoadingScreen"
const IMAGE_SUFFIX = ".webp"
const DELAY_IN_MILLIS = 250
const MODELS = ["https://modelviewer.dev/assets/ShopifyModels/Chair.glb", "https://modelviewer.dev/shared-assets/models/Astronaut.glb"]

let loaderIcon
let loaderText
let head
let roundedPercentage = 0

function onLoad()
{
    loaderIcon = document.getElementById("loader-icon");
    loaderText = document.getElementById("loader-text");
    head = document.querySelector("head")
    showLoaderText(0)
    new Observable((subscriber) => onSubscribe(subscriber, 0))
    .subscribe(
        {
            next(i) { changeLoaderIcon(i) },
            error(err) { console.log(err) },
            complete() { onLoadingComplete() }
        }
    )
}

function onSubscribe(subscriber, i)
{
    if (i < MODELS.length)
    {
        subscriber.next(i)
        let link = document.createElement("link")
        link.rel = "prefetch"
        link.href = MODELS[i]
        link.as = "fetch"
        link.onload = ()=>{ onSubscribe(subscriber, i+1) }
        link.onerror = ()=>{ onSubscribe(subscriber, i+1) }
        head.appendChild(link)
    }
    else
    {
        subscriber.next(MODELS.length)
        setTimeout(() => subscriber.complete(), 1000)
    }
}

function changeLoaderIcon(index)
{
    if (index > 0)
    {
        let percentage = (index * 100)/MODELS.length
        roundedPercentage = (percentage<100)?(Math.floor(percentage/5) * 5):100
        loaderIcon.src = IMAGE_PREFIX+roundedPercentage+IMAGE_SUFFIX
    }
}

function showLoaderText(dots)
{
    if (roundedPercentage < 100)
    {
        dots = (dots > 3) ? 0 : dots
        let dotText = ""
        for(let i=0; i<dots; i++)
            dotText += "."
        dotText += " "
        loaderText.innerHTML = "LOADING"+dotText+" "+roundedPercentage+"%"
        setTimeout(() => showLoaderText(dots+1), DELAY_IN_MILLIS)
    }
    else
        loaderText.innerHTML = "LOADING... 100%"
}

function onLoadingComplete()
{
    window.location.replace("loaded-screen.html")
}
