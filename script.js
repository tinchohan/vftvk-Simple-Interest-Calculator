

function compute()
{
    var principal = document.getElementById("principal").value;
    
    if 
    (principal <= 0 ){
        alert("You must enter a positive number")
    }
    
    else 
    
    {var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    const result = document.getElementById("result")
    const str = 'If you deposit '+ principal + ',' +
    ' at an interest rate of ' + rate + '.' +
    ' You will receive an amount of ' + interest + ',' +
    ' in the year ' + year
    result.innerHTML = str}
    document.getElementById("principal").focus()
}
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

