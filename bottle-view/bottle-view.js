function onLoad()
{
    let canvas = document.getElementById("canvas")
    let context = canvas.getContext("2d")
    context.beginPath()
    context.rect(0, 0, canvas.width, canvas.height)
    context.fillStyle = "grey"
    context.fill()
}

function onInfoClick()
{
    let footerLabel = document.getElementById("footer-label")
    footerLabel.innerHTML = "FIND YOUR DISTRIBUTOR"
}