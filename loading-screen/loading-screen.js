const IMAGE_PREFIX = "loading-screen-icon/LoadingScreen"
const IMAGE_SUFFIX = ".webp"
const DELAY_IN_MILLIS = 500

let loaderIcon
let loaderText

function onLoad()
{
    loaderIcon = document.getElementById("loader-icon")
    loaderText = document.getElementById("loader-text")
    changeLoaderIcon(0)
}

function changeLoaderIcon(percentage)
{
    percentage = (percentage < 100) ? percentage+5 : 5
    loaderIcon.src = IMAGE_PREFIX+percentage+IMAGE_SUFFIX
    loaderText.innerHTML = "LOADING... "+percentage+"%"
    setTimeout(() => changeLoaderIcon(percentage), DELAY_IN_MILLIS)
}
