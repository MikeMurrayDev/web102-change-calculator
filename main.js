// Write your JavaScript here

var dollars = document.getElementById("dollars-output");
var quarters = document.getElementById("quarters-output");
var dimes = document.getElementById("dimes-output");
var nickels = document.getElementById("nickels-output");
var pennies = document.getElementById("pennies-output");

function calculateChange () {

    dollars.innerHTML = '0';
    quarters.innerHTML = '0';
    dimes.innerHTML = '0';
    nickels.innerHTML = '0';
    pennies.innerHTML = '0';

    var itemCost = document.getElementById("amount-due").value;
    var customerMoney = document.getElementById("amount-received").value;

    var returnValue = customerMoney - itemCost;
    var returnValueFixed = parseFloat(returnValue);
    var change = {};

    const changeType = ['dollar', 'quarter', 'dime', 'nickel', 'penny'];
    const changeValue = [1, .25, .1, .05, .01];
    
    var amount;
    
    for (var i = 0; i < changeValue.length; i++) {
        amount = Math.floor(returnValueFixed/changeValue[i]);
        if (amount > 0) {
            amount = Math.floor(returnValueFixed/changeValue[i]);

            change[changeType[i]] = amount;
            returnValueFixed = returnValueFixed%changeValue[i];
            returnValueFixed = returnValueFixed.toFixed(2);
        }
    }

    if (change.dollar != null) {
        // Clear value for Dollars div and populate correct amount to be returned
        dollars.innerHTML = '';
        var changeDollar = document.createTextNode(change.dollar);
        dollars.appendChild(changeDollar);
    }

    if (change.quarter != null) {
        // Clear value for Quarters div and populate correct amount to be returned
        quarters.innerHTML = '';
        var changeQuarter = document.createTextNode(change.quarter);
        quarters.appendChild(changeQuarter);
    }

    if (change.dime != null) {
        // Clear value for Dimes div and populate correct amount to be returned
        dimes.innerHTML = '';
        var changeDime = document.createTextNode(change.dime);
        dimes.appendChild(changeDime);
    }

    if (change.nickel != null) {
        // Clear value for Nickels div and populate correct amount to be returned
        nickels.innerHTML = '';
        var changeNickel = document.createTextNode(change.nickel);
        nickels.appendChild(changeNickel);
    }

    if (change.penny != null) {
        // Clear value for Pennies div and populate correct amount to be returned
        pennies.innerHTML = '';
        var changePenny = document.createTextNode(change.penny);
        pennies.appendChild(changePenny);        
    }

    return change;
}

function assignChange(change) {
    for (var i = 0; i < change.length; i++){
        change[i]
    }
}