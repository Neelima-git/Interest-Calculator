function CalculateSI()
{
    let p=document.getElementById('amount').value;
    let t=document.getElementById('time').value;
    let r=document.getElementById('rate').value;

    let  SI=(p*t*r)/100;

    document.getElementById('si').innerHTML="The Simple Interest is: "+SI;
}

function CalculateCI(){

    p =document.getElementById("principal").value;
    r =document.getElementById("annual-interest-rate").value;
    t =document.getElementById("number-of-years").value;
    n =document.getElementById("compounding-frequency").value;

    let r1 = r/100;
    let nbr=r1/n; // rate of interest / no of years
    let x = (1+nbr);
    let nt = n*t;
    let xnt = Math.pow(x,nt); // Function used to calculate the power
    let CI = parseInt(p*xnt);
    
    document.getElementById('ci').innerHTML="The Compound Interest is: "+CI;
}