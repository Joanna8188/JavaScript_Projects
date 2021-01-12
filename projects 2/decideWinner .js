/* CODING CHALLENGE 2

John and Mike both play basketball in different teams. In the latest three games,
John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and
123 points.

1. Calculate the average score for each team.
2. Decide which teams wins in average (highest average score), and print the winner
to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account
there might be a draw (the same average score).
4. EXTRA: Mary also plays basketball and her team scored 97, 134 and 105 points. Like
before log the average winner to the console. Hint: You will need an && operator to take
the decision.
5. Change the scores to generate different winners.
*/

//Simple Concept:
/*
var scoreJohn = (89 + 120 + 103) / 3;
var scoreMike = (116 + 94 + 123) / 3;
var scoreMary = (97 + 134 + 105) / 3;
console.log(scoreJohn, scoreMike, scoreMary);

if(scoreJohn > scoreMike && scoreJohn > scoreMary){
  console.log("John's Team wins with scores of: " + scoreJohn + " points!");
} else if(scoreMike > scoreJohn && scoreMike > scoreMary) {
  console.log("Mike's Team wins with scores of: " + scoreMike + " points!");
} else if(scoreMary > scoreJohn && scoreMary > scoreMike)
  console.log("Mary's Team wins with scores of: " + scoreMary + " points!");
else {
  console.log("There is a Draw in the Game");
}
*/
var winner = document.getElementById('team');
var average = document.getElementById('result');
var display = document.querySelector('.display');
var resultA = document.getElementById('scoreFirst');
var resultB = document.getElementById('scoreSecond');

function winnerCompute() {
  var scoreOneA = parseInt(document.querySelector('.scoreOneA').value, 10);
  var scoreTwoA = parseInt(document.querySelector('.scoreTwoA').value, 10);
  var scoreThreeA = parseInt(document.querySelector('.scoreThreeA').value, 10);

  var scoreOneB = parseInt(document.querySelector('.scoreOneB').value, 10);
  var scoreTwoB = parseInt(document.querySelector('.scoreTwoB').value, 10);
  var scoreThreeB = parseInt(document.querySelector('.scoreThreeB').value, 10);

  var scoreA = (scoreOneA + scoreTwoA + scoreThreeA) / 3;
  var scoreB = (scoreOneB + scoreTwoB + scoreThreeB) / 3;

  displayResult(scoreA, scoreB)
  resultA.textContent = scoreA;
  resultB.textContent = scoreB;
}

function displayResult(teamA, teamB){
  if(teamA > teamB){
    winner.textContent = "Team A";
    average.textContent = teamA;
  } else if(teamB > teamA){
    winner.textContent = "Team B";
    average.textContent = teamB;
  } else {
    display.innerHTML = "<h2>The game is a Draw<h2>";
  }
}
