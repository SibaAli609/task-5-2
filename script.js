var formula = `{
    "conversions": [
        {
            "from": "Millimeter",
            "to": "Centimeter",
            "formula": "Centimeter = Millimeter / 10"
        },
        {
            "from": "Millimeter",
            "to": "Decimeter",
            "formula": "Decimeter = Millimeter / 100"
        },
        {
            "from": "Millimeter",
            "to": "Meter",
            "formula": "Meter = Millimeter / 1000"
        },
        {
            "from": "Millimeter",
            "to": "Kilometer",
            "formula": "Kilometer = Millimeter / 1000000"
        },
       
        {
            "from": "Centimeter",
            "to": "Millimeter",
            "formula": "Millimeter = Centimeter * 10"
        },
        {
            "from": "Centimeter",
            "to": "Decimeter",
            "formula": "Decimeter = Centimeter / 10"
        },
        {
            "from": "Centimeter",
            "to": "Meter",
            "formula": "Meter = Centimeter / 100"
        },
        {
            "from": "Centimeter",
            "to": "Kilometer",
            "formula": "Kilometer = Centimeter / 100000"
        },
       

        {
            "from": "Decimeter",
            "to": "Centimeter",
            "formula": "Centimeter = Decimeter * 10"
        },
        {
            "from": "Decimeter",
            "to": "Meter",
            "formula": "Meter = Decimeter / 10"
        },
        {
            "from": "Decimeter",
            "to": "Kilometer",
            "formula": "Kilometer = Decimeter / 10000"
        },
        
        {
            "from": "Decimeter",
            "to": "Millimeter",
            "formula": "Millimeter = Decimeter * 100"
        },
        {
            "from": "Meter",
            "to": "Centimeter",
            "formula": "Centimeter = Meter * 100"
        },
        {
            "from": "Meter",
            "to": "Kilometer",
            "formula": "Kilometer = Meter / 1000"
        },
       
        {
            "from": "Meter",
            "to": "Decimeter",
            "formula": "Decimeter = Meter * 10"
        },
        {
            "from": "Meter",
            "to": "Millimeter",
            "formula": "Millimeter = Meter * 1000"
        },                
        {
            "from": "Kilometer",
            "to": "Centimeter",
            "formula": "Centimeter = Kilometer * 100000"
        },
        {
            "from": "Kilometer",
            "to": "Decimeter",
            "formula": "Decimeter = Kilometer * 10000"
        },
        {
            "from": "Kilometer",
            "to": "Meter",
            "formula": "Meter = Kilometer * 1000"
        },
       
        {
            "from": "Kilometer",
            "to": "Millimeter",
            "formula": "Millimeter = Kilometer * 1000000"
        },
       
        {
        
            "from": "Kilometer",
            "to": "Millimeter",
            "formula": "Millimeter = Kilometer * 1000000"
        }       
    ]

}`
      
const objFormula = JSON.parse(formula);

function LengthConverterForm ()
{
  
    
    var fromLength = document.getElementById("fromLength").value;
   
    
    return true;
}



function CalculateLength()
{
    if(LengthConverterForm())
    {
        var fromUnit = document.getElementById("fromUnit").value;
        var toUnit = document.getElementById("toUnit").value;
        var fromLength = document.getElementById("fromLength").value;
        var outputlength = document.getElementById("outputLength");

        ShowFormula(fromUnit, toUnit);

        var result = ConvertLength(fromLength, fromUnit,  toUnit);
        outputlength.value = Number(result).toFixed(2);      
        document.getElementById("lengthResult").innerHTML = fromLength + ' ' + fromUnit + ' = ' + result.toFixed(2) + ' ' + toUnit; 

        //result div show
        _cmnHideElement("OutputInfo");
        _cmnShowElement("OutputResult", "flex");
    }
}

function ConvertLength(fromLength, fromUnit,  toUnit)
{
    fromLength = Number(fromLength);
    var result = 0;
    var makeThisMillimeter = 0;
    var inMillimeter = 0;

    // first make the given unit to millimeter
    switch (fromUnit)
    {
        case "Millimeter":
            makeThisMillimeter = 1;
            break;
        case "Centimeter":
            makeThisMillimeter = 10;
            break;
        case "Decimeter":
            makeThisMillimeter = 100;
            break;
        case "Meter":
            makeThisMillimeter = 1000;
            break;
        case "Kilometer":
            makeThisMillimeter = 1000000;
            break;
       
    }
    inMillimeter = fromLength * makeThisMillimeter;

    //convert the millimiter value to the targeted unit
    switch (toUnit)
    {
        case "Millimeter":
            result = inMillimeter;
            break;
        case "Centimeter":
            result = inMillimeter / 10;
            break;
        case "Decimeter":
            result = inMillimeter / 100;
            break;
        case "Meter":
            result = inMillimeter / 1000;
            break;
        case "Kilometer":
            result = inMillimeter / 1000000;
            break;
        
    }
    return result;
}

function ShowFormula(fromUnit,toUnit)
{
    document.getElementById("lengthFormula").innerHTML = "";

    for(var i = 0; i <objFormula.conversions.length; i++)
    {            
        if(
            objFormula.conversions[i].from.toLowerCase() == fromUnit.toLowerCase() 
            && objFormula.conversions[i].to.toLowerCase() == toUnit.toLowerCase()
            )
        {
            document.getElementById("lengthFormula").innerHTML = objFormula.conversions[i].formula;
        }
    }
}



function erorrBorder()
{
    var allErrorBorder = document.getElementsByClassName('tool-error-border');
	
	var i;
    for(i = (allErrorBorder.length) - 1; i>=0; i--)
    {
        allErrorBorder[i].classList.remove("tool-error-border");
    }
    
     
}



function _cmnHideElement(elementId){}


function _cmnShowElement(elementId, displayName)
{
    var selectedDisplayValue = document.getElementById(elementId).style.display;
    if(selectedDisplayValue != displayName)
    {
        document.getElementById(elementId).style.display = displayName;
    }
}




           
        
            
           
          