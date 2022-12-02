let states;

function onListLoad()
{
    let list = document.getElementById("list")
    states = getStates()
    for (let i=0; i<states.length; i++)
        list.appendChild(createListItem(i, states[i]))
}

function onItemSelect(index)
{
    console.log("selected state :: "+states[index])
}

function getStates()
{
    return ["FL", "CA", "NV", "NY", "AZ", "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "DC", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "OR"]
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