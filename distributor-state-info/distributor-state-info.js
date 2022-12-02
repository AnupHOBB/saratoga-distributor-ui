function onLoad()
{
    let list = document.getElementById("list")
    let infoData = getStateInfo()
    let title = document.getElementById("title")
    title.innerHTML = getTitle()
    for(let i=0; i<infoData.length; i++)
        list.appendChild(createListItem(infoData[i], i))
}

function createListItem(info, index)
{
    let listItem = document.createElement("div")
    listItem.className = "listItem"
    
    let listItemHeader = document.createElement("p")
    listItemHeader.innerHTML = info.title
    listItemHeader.className = "listItemHeader"

    listItem.appendChild(listItemHeader)

    let listItemBody = document.createElement("div")
    listItemBody.className = "listItemBody"

    let listItemContent = document.createElement("div")
    listItemContent.className = "listItemContent"

    let listItemAddress = document.createElement("p")
    listItemAddress.innerHTML = info.address1 + "<br/>" + info.address2
    listItemAddress.className = "listItemAddress"

    listItemContent.appendChild(listItemAddress)

    let listItemNumber = document.createElement("p")
    listItemNumber.innerHTML = "<u>"+ info.phone + "</u>"
    listItemNumber.className = "listItemNumber"

    listItemContent.appendChild(listItemNumber)

    listItemBody.appendChild(listItemContent)

    let listItemImage = document.createElement("img")
    listItemImage.className = "listItemImage"
    listItemImage.src = "caller.png"

    listItemBody.appendChild(listItemImage)

    listItem.appendChild(listItemBody)

    let listItemFooter = document.createElement("div")
    listItemFooter.className = "listItemFooter"

    let listItemFooterItem12Sprk = document.createElement("div")
    
    let listItemCheckBoxImage12Sprk = document.createElement("img")
    listItemCheckBoxImage12Sprk.className = "listItemCheckbox"
    listItemCheckBoxImage12Sprk.src = (info.has12OzSprk) ? "checkbox.png" : "no_checkbox.png"

    listItemFooterItem12Sprk.appendChild(listItemCheckBoxImage12Sprk)

    let listItemLabel12Sprk  = document.createElement("p")
    listItemLabel12Sprk.className = "listItemFooterLabel"
    listItemLabel12Sprk.innerHTML = "12 oz Sprk"

    listItemFooterItem12Sprk.appendChild(listItemLabel12Sprk)

    listItemFooter.appendChild(listItemFooterItem12Sprk)

    let listItemFooterItem28Sprk = document.createElement("div")

    let listItemCheckBoxImage28Sprk = document.createElement("img")
    listItemCheckBoxImage28Sprk.className = "listItemCheckbox"
    listItemCheckBoxImage28Sprk.src = (info.has12OzSprk) ? "checkbox.png" : "no_checkbox.png"

    listItemFooterItem28Sprk.appendChild(listItemCheckBoxImage28Sprk)

    let listItemLabel28Sprk  = document.createElement("p")
    listItemLabel28Sprk.className = "listItemFooterLabel"
    listItemLabel28Sprk.innerHTML = "28 oz Sprk"

    listItemFooterItem28Sprk.appendChild(listItemLabel28Sprk)

    listItemFooter.appendChild(listItemFooterItem28Sprk)

    let listItemFooterItem12Stl = document.createElement("div")
    
    let listItemCheckBoxImage12Stl = document.createElement("img")
    listItemCheckBoxImage12Stl.className = "listItemCheckbox"
    listItemCheckBoxImage12Stl.src = (info.has12OzStl) ? "checkbox.png" : "no_checkbox.png"

    listItemFooterItem12Stl.appendChild(listItemCheckBoxImage12Stl)

    let listItemLabel12Stl  = document.createElement("p")
    listItemLabel12Stl.className = "listItemFooterLabel"
    listItemLabel12Stl.innerHTML = "12 oz Stl"

    listItemFooterItem12Stl.appendChild(listItemLabel12Stl)

    listItemFooter.appendChild(listItemFooterItem12Stl)

    let listItemFooterItem28Stl = document.createElement("div")

    let listItemCheckBoxImage28Stl = document.createElement("img")
    listItemCheckBoxImage28Stl.className = "listItemCheckbox"
    listItemCheckBoxImage28Stl.src = (info.has28OzStl) ? "checkbox.png" : "no_checkbox.png"

    listItemFooterItem28Stl.appendChild(listItemCheckBoxImage28Stl)

    let listItemLabel28Stl  = document.createElement("p")
    listItemLabel28Stl.className = "listItemFooterLabel"
    listItemLabel28Stl.innerHTML = "28 oz Stl"

    listItemFooterItem28Stl.appendChild(listItemLabel28Stl)

    listItemFooter.appendChild(listItemFooterItem28Stl)

    listItem.appendChild(listItemFooter)

    return listItem
}