/* Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula: BMI = mass / height^2 (mass in kg and height
in meter).

1. Store Mark's and John's mass and height in variables.
2. Calculate both their BMI's.
3. Create a boolean variable containing information about whether Mark has a
higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something
like: "Is Mark's BMI higher than John's? true? false?")
*/
function compute(){
  var markMass = document.getElementById('markMass').value;
  var markHeight = document.getElementById('markHeight').value;
  var johnMass = document.getElementById('johnMass').value;
  var johnHeight = document.getElementById('johnHeight').value;

  var boolean = document.getElementById("boolean");

  var massOne = parseInt(markMass,10);
  var heightOne = parseInt(markHeight,10);
  var massTwo = parseInt(johnMass,10);
  var heightTwo = parseInt(johnHeight,10);

  console.log(massOne, heightOne);
  console.log(massTwo, heightTwo);

  var markBMI = massOne / (heightOne * heightOne);
  document.getElementById('markTotal').textContent = markBMI;
  console.log(markBMI);

  var johnBMI = massTwo / (heightTwo * heightTwo);
  document.getElementById('johnTotal').textContent = johnBMI;
  console.log(johnBMI);

  if(markBMI > johnBMI) {
    var mark = boolean.textContent = "True";
    // mark.document.style.color = "blue"
  } else {
    var john = boolean.textContent = "False";
    // john.document.style.color = "green"

  }

}
