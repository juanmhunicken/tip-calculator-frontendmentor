console.log("hello");


function toggleCustomTip() {
    document.getElementById("tipCustom").style.display = "none";
    document.getElementById("customTip").style.display = "block";
}

function calculateTip(bill, percentage, numPeople){
    return bill * percentage / numPeople;
}

function calculateTotalPP(bill, numPeople, tip){
    return tip + (bill / numPeople);
}

function main(percentage) {
    let bill = document.getElementById("billAmount").value;
    let numPeople = document.getElementById("numPeople").value;
    
    console.log('bill + ', bill);

    let tip = calculateTip(bill, percentage, numPeople);
    let total = calculateTotalPP(bill, numPeople, tip);

    console.log(tip);
    console.log(total);

    document.getElementById("tipResult").innerHTML = '$' + tip.toFixed(2);
    document.getElementById("totalResult").innerHTML = '$' + total.toFixed(2);
}

function reset(){
    console.log("reset function started");
    document.getElementById("billAmount").innerHTML = 0;
    document.getElementById("numPeople").innerHTML = "0";
    document.getElementById("tipResult").innerHTML = '$0.00';
    document.getElementById("totalResult").innerHTML = '$0.00';
}