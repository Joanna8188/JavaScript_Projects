/* Codding Challenge 3

John and his family went on a holiday and went to 3 different restaurants. The bills were:
$124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function).
He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is
between $50 and $200 and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1. Containing all three tips (One for each bill).
2. Containg all three final paid amounts (bill + tips).
*/

var tips = [];
var totalAmount = [];
var spent = [];

function cost(){
  var tip = parseInt(document.querySelector(".cost").value, 10);
  spent.push(tip);

  var ulCost = document.querySelector(".inputCost");
  var liAmount = document.createElement("li");
  var textAmount = document.createTextNode("$ " + tip);
  liAmount.appendChild(textAmount);
  ulCost.appendChild(liAmount);
  document.querySelector(".cost").value = "";
}

function tipCalculator(){
  var tip = 0;
  var amount = 0;

  for(var i = 0; i < spent.length; i++){

    var x = spent[i];

    if(x < 50){
      tip = x * 0.2;
    } else if(x >= 50 && x <= 200){
      tip = x * 0.15;
    } else {
      tip = x * 0.10;
    }
    amount = x + tip;
    tips.push(tip);
    totalAmount.push(amount);
  }
  displayAllAmount();
}

function displayAllAmount(){
  var displayTip = document.querySelector(".tip");
  var displayTotalCost = document.querySelector(".totalCost");
  for(var i = 0; i < tips.length; i++){
    var liTip = document.createElement("li");
    var liText = document.createTextNode("$ " + tips[i]);
    liTip.appendChild(liText);
    displayTip.appendChild(liTip);
  }
  for(var i = 0; i < totalAmount.length; i++){
    var liTotal = document.createElement("li");
    var liText = document.createTextNode("$ " + totalAmount[i]);
    liTotal.appendChild(liText);
    displayTotalCost.appendChild(liTotal);
  }
}
console.log(tips, totalAmount);
