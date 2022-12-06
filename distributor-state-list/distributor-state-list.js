const {Observable, from} = rxjs

let states;

function onListLoad()
{
    let list = document.getElementById("list")
    new Observable((subscriber) =>
        {
            states = getStates()
            for (let i=0; i<states.length; i++)
                subscriber.next({ index: i, label: states[i].code })
            subscriber.complete()
        }
    ).subscribe(
        {
            next(item) { list.appendChild(createListItem(item)) },
            error(err) { console.log(err) },
            complete() { console.log("populated list using RxJS") }
        }
    )
}

function onItemSelect(index)
{
    selectState(index, states[index])
}

function createListItem(item)
{
    let pLabel = document.createElement("p")
    pLabel.className = "listItemLabel"
    pLabel.innerHTML = item.label;
    let img = document.createElement("img")
    img.className = "listItemArrow"
    img.src = "arrow-white.png"
    let div = document.createElement("div")
    div.className = "listItem"
    div.setAttribute('onclick','onItemSelect('+item.index+')');
    div.appendChild(pLabel)
    div.appendChild(img)
    return div
}