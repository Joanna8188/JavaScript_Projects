/*
Coding Challenge Five

John and his family went to five different restaurants. The bills were $124,
$48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill
is between $50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values.
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the
tip calculation.
4. As an output, create 1) A new array containing all tips, and 2) an array containing
final paid amounts (bill + tip).
*/

/*
EXTRA AFTER FINISHING: Mark's family went on a holiday, going to 4 different restaurants.
The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is
between $100 and $300, and 25% if the bill is more than $300. Different from John.

5. Implement the same functionality as before, this time using Mark's tipping rules.
6. Create a function not a method to calculate the given array of tips. HINT: loop
over the array, and in each iteration store the current sum in a variable (starting from 0).
After you have the sum of the array, divide it by the number of elements in it (that's
how you calculate the average).
7. Calculate the average tip for each family.
8. Log to the console which family paid the highest tips on average.
*/

var PersonOne = {
  bills: [],
  calculateTip: function(){
    this.totalTips = [];
    this.totalBills = [];
    var tip = 0;
    var bill = this.bills;
    for(var i = 0; i < bill.length; i++){
      if(bill[i] < 50){
        tip = bill[i] * 0.2;
      } else if(bill[i] <= 200) {
        tip = bill[i] * 0.15;
      } else {
        tip = bill[i] * 0.1;
      }

      var total = bill[i] + tip;
      this.totalTips.push(tip);
      this.totalBills.push(total);

      var tip = document.querySelector(".tip");
      var displayTip = document.createElement("li");
      var textTip = document.createTextNode(this.totalTips[i]);
      tip.appendChild(displayTip);
      displayTip.appendChild(textTip);

      var amount = document.querySelector(".totalCost");
      var displayAmount = document.createElement("li");
      var textAmount = document.createTextNode(this.totalBills[i]);
      amount.appendChild(displayAmount);
      displayAmount.appendChild(textAmount);
    }

    console.log(this.totalTips);
    console.log(this.totalBills);
  }
};

function cost(){
  var cost = parseInt(document.querySelector(".cost").value, 10);
  PersonOne.bills.push(cost);
  var ul = document.querySelector(".inputCost");
  var li = document.createElement("li");
  var text = document.createTextNode(cost);
  li.appendChild(text);
  ul.appendChild(li);
  document.querySelector(".cost").value = "";
  console.log(PersonOne.bills);
}
