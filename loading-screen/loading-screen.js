const IMAGE_PREFIX = "loading-screen-icon/LoadingScreen"
const IMAGE_SUFFIX = ".webp"
const DELAY_IN_MILLIS = 500

let loaderIcon
let loaderText

function onLoad()
{
    loaderIcon = document.getElementById("loader-icon")
    loaderText = document.getElementById("loader-text")
    changeLoaderIcon(5)
}

function changeLoaderIcon(percentage)
{
    if (percentage <= 100)
    {
        loaderIcon.src = IMAGE_PREFIX+percentage+IMAGE_SUFFIX
        loaderText.innerHTML = "LOADING... "+percentage+"%"
        setTimeout(() => changeLoaderIcon(percentage + 5), DELAY_IN_MILLIS)
    }
    else
        onLoadingComplete()
}

function onLoadingComplete()
{
    let head = document.querySelector("head")
    let body = document.querySelector("body")
    head.parentElement.removeChild(head)
    body.parentElement.removeChild(body)
}
