const { Observable, timer } = rxjs
const { delay } = rxjs.operators

const IMAGE_PREFIX = "loading-screen-icon/LoadingScreen"
const IMAGE_SUFFIX = ".webp"
const DELAY_IN_MILLIS = 500
const MODELS = ["https://modelviewer.dev/assets/ShopifyModels/Chair.glb","https://modelviewer.dev/shared-assets/models/Astronaut.glb"]

let loaderIcon
let loaderText
let head
let percentage = 0

function onLoad()
{
    loaderIcon = document.getElementById("loader-icon");
    loaderText = document.getElementById("loader-text");
    head = document.querySelector("head")
    showLoaderText(1)
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
        head.appendChild(link)
    }
    else
    {
        subscriber.next(MODELS.length)
        setTimeout(() => subscriber.complete(), 1500)
    }
}

function changeLoaderIcon(index)
{
    if (index > 0)
    {
        let roughPercentage = (index * 100)/MODELS.length
        percentage = (roughPercentage<100)?(Math.floor(roughPercentage/5) * 5):100
        loaderIcon.src = IMAGE_PREFIX+percentage+IMAGE_SUFFIX
    }
}

function showLoaderText(dots)
{
    dots = (dots > 3) ? 1 : dots
    let dotText = ""
    for(let i=0; i<dots; i++)
        dotText += "."
    dotText += " "
    loaderText.innerHTML = "LOADING"+dotText+" "+percentage+"%"
    setTimeout(() => showLoaderText(dots+1), DELAY_IN_MILLIS)
}

function onLoadingComplete()
{
    let body = document.querySelector("body")
    body.parentElement.removeChild(body)
    
    let html = document.querySelector("html")
    let object = document.createElement("object")
    object.style = "width: 100%; height: 100%;"
    object.type = "text/html"
    object.data = "loaded-screen.html"
    html.appendChild(object)
}
