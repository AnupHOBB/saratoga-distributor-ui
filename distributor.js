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

function getStateInfo()
{
    return [
        new Info("WINE WAREHOUSE DISTRIBUTIONS", "6550 E WASHINGTON BLVD", "COMMERCE 90040-1822", "(800) 331-2829", true, true, false, true),
        new Info("WHISKEY WAREHOUSE DISTRIBUTIONS", "221B BAKER STREET", "BUSINESS 90040-1822", "(800) 331-2777", false, true, true, false)
    ]
}

function getTitle()
{
    return "NEVADA"
}

function getStates()
{
    return ["FL", "CA", "NV", "NY", "AZ", "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "DC", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "OR"]
}

function selectState(index, stateCode)
{
    console.log("selected state at "+index+" with state code :: "+stateCode)
}

function callDistributer(index, number)
{
    console.log("calling distributor at "+index+" with number :: "+number)
}