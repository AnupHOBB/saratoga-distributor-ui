let states;

function onListLoad()
{
    let list = document.getElementById("list")
    states = getStates()
    for (let i=0; i<states.length; i++)
        list.appendChild(createListItem(i, states[i].code))
}

function onItemSelect(index)
{
    selectState(index, states[index])
}

function createListItem(index, label)
{
    let pLabel = document.createElement("p")
    pLabel.className = "listItemLabel"
    pLabel.innerHTML = label;
    let pArrow = document.createElement("p")
    pArrow.className = "listItemArrow"
    pArrow.innerHTML = ">"
    let div = document.createElement("div")
    div.className = "listItem"
    div.setAttribute('onclick','onItemSelect('+index+')');
    div.appendChild(pLabel)
    div.appendChild(pArrow)
    return div 
}