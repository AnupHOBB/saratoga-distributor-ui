const { Observable, timer } = rxjs
const { delay } = rxjs.operators

const IMAGE_PREFIX = "loading-screen-icon/LoadingScreen"
const IMAGE_SUFFIX = ".webp"
const DELAY_IN_MILLIS = 500

let loaderIcon
let loaderText

function onLoad()
{
    loaderIcon = document.getElementById("loader-icon");
    loaderText = document.getElementById("loader-text");
    new Observable((subscriber) => onSubscribe(subscriber, 5))
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
    if (i <= 100)
    {
        subscriber.next(i)
        setTimeout(() => onSubscribe(subscriber, i+5), DELAY_IN_MILLIS)
    }
    else
        subscriber.complete()
}

function changeLoaderIcon(percentage)
{
    loaderIcon.src = IMAGE_PREFIX+percentage+IMAGE_SUFFIX
    loaderText.innerHTML = "LOADING... "+percentage+"%"
}

function onLoadingComplete()
{
    let head = document.querySelector("head")
    let body = document.querySelector("body")
    head.parentElement.removeChild(head)
    body.parentElement.removeChild(body)
}
