class Info
{
    constructor(title, address1, address2, phone, has12OzSprk, has28OzSprk, has12OzStl, has28OzStl)
    {
        this.title = title
        this.address1 = address1
        this.address2 = address2
        this.phone = phone
        this.has12OzSprk = has12OzSprk
        this.has28OzSprk = has28OzSprk
        this.has12OzStl = has12OzStl
        this.has28OzStl = has28OzStl
    }
}

class State
{
    constructor(code, name)
    {
        this.code = code
        this.name = name
    }
}


function getStateInfo()
{
    return [
        new Info("WINE WAREHOUSE DISTRIBUTIONS", "6550 E WASHINGTON BLVD", "COMMERCE 90040-1822", "(800) 331-2829", true, true, false, true),
        new Info("WHISKEY WAREHOUSE DISTRIBUTIONS", "221B BAKER STREET", "BUSINESS 90040-1822", "(800) 331-2777", false, true, true, false)
    ]
}

function getTitle()
{
    let param = window.location.search.substring(1)
    return param.split("=")[1]
}

function getStates()
{
    return [new State("FL", "FLORIDA"), new State("CA", "CALIFORNIA"), new State("SD", "SOUTH&nbspDAKOTA"), new State("ND", "NORTH&nbspDAKOTA"), new State("NV", "NEVADA"), new State("NY", "NEW&nbspYORK"), new State("AL", "ALABAMA"), new State("AK", "ALASKA"), new State("OR", "OREGON")]
}

function selectState(index, stateCode)
{
    selectedState = states[index].name
    window.location.replace("http://127.0.0.1:5500/distributor-state-info/distributor-state-info.html?title="+selectedState)
    console.log("selected state at "+index+" with state code :: "+stateCode)
}

function callDistributer(index, number)
{
    console.log("calling distributor at "+index+" with number :: "+number)
}