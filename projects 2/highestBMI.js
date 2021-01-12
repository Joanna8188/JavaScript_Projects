/*Codding Challenge Four

From the first coding challenge where Mark and John compared their BMI's, try to implement
the same functionality with objects and method.

1. For each of them, create an object with properties for their full name, mass and height.
2. Then, add a method to each object to calculate the BMI to the object and also return it
from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and
the respective BMI. Don't forget they might have the same BMI.
*/

var John = {
  fullName: "John Smith",
  mass: 0,
  height: 0,
  calculateBMI: function (){
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
}

var Mark = {
  fullName: "Mark Connor",
  mass: 0,
  height: 0,
  calculateBMI: function (){
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
}

function compute(){
  var markMass = document.getElementById('markMass').value;
  var markHeight = document.getElementById('markHeight').value;
  var johnMass = document.getElementById('johnMass').value;
  var johnHeight = document.getElementById('johnHeight').value;

  var boolean = document.getElementById("boolean");

  Mark.mass = parseInt(markMass,10);
  Mark.height = parseInt(markHeight,10);
  John.mass = parseInt(johnMass,10);
  John.height = parseInt(johnHeight,10);

  Mark.calculateBMI();
  document.getElementById('markTotal').textContent = Mark.bmi;
  console.log(Mark.bmi);

  John.calculateBMI();
  document.getElementById('johnTotal').textContent = John.bmi;
  console.log(John.bmi);


  console.log("Who has the highest BMI? ");
  var display = document.getElementById("highest");
  if(John.bmi > Mark.bmi){
    document.getElementById("highest").innerHTML = John.fullName + "<p>" + "BMI: " + John.bmi + "</p>";
    console.log(John.fullName, John.bmi);
  } else if(Mark.bmi > John.bmi){
    console.log(Mark.fullName, Mark.bmi);
    document.getElementById("highest").innerHTML = Mark.fullName + "<p>" + "BMI: " + Mark.bmi + "</p>";

  } else {
    console.log("They have the same BMI");
  }
  document.getElementsByTagName("input").value = "";
}

console.log(John, Mark);
