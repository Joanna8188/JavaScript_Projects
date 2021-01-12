/*
GAME RULES:

- The game has two players, playing in rounds
- In each turn, a player rolls the dice as many times as he wishes. Each result gets
added to his ROUND score.
- But if a player rolls a 1, all his ROUND scores will be lost. After that its the
next players turn
- The players can choose to 'HOLD', that means his round score gets added to his global
score. After that it's the next players turn.
- The first player who reach the 100 points in global scores wins the game.
*/

var scores, activePlayer, roundScore, gameStart, previousNum, winningScore;

init();

document.querySelector(".btn-roll").addEventListener("click", function(){
  if(gameStart){
    var currentScore = document.getElementById("current-" + activePlayer);
    var dice1 = Math.floor(Math.random() * 6 + 1);
    var dice2 = Math.floor(Math.random() * 6 + 1);

    document.getElementById("dice-1").style.display = "block";
    document.getElementById("dice-2").style.display = "block";

    document.getElementById("dice-1").src="dice-" + dice1 + ".png";
    document.getElementById("dice-2").src="dice-" + dice2 + ".png";

    if(dice1 !== 1 && dice2 !== 1){
      roundScore += (dice1 + dice2);
      // previousNum = ranNumber;
      currentScore.textContent = roundScore;

    } else {
      // if(ranNumber === 6 && previousNum === 6){
      document.getElementById('score-' + activePlayer).textContent = '0';
      scores[activePlayer] = 0;
      nextPlayer();
    }
    // } else {
    //   nextPlayer();
    // }
  }
});


document.querySelector(".btn-hold").addEventListener("click", function(){
  scores[activePlayer] += roundScore;
  document.getElementById("score-" + activePlayer).textContent = scores[activePlayer];
  console.log(scores[activePlayer], winningScore);
  var input = parseInt(document.querySelector(".input-score").value, 10);

  if(input){
    winningScore = input;
  } else {
    winningScore = 100;
  }

  if(scores[activePlayer] >= winningScore){
    document.getElementById("name-" + activePlayer).textContent = "WINNER";
    document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
    document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
    roundScore = 0;
    document.getElementById('current-' + activePlayer).textContent = '0';
    gameStart = false;
  }

  else {
    nextPlayer();
  }
})


function nextPlayer() {
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;

  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
  hideDice();
}


document.querySelector(".btn-new").addEventListener("click", init);


function init() {
  scores = [0,0];
  roundScore = 0;
  activePlayer = 0;
  gameStart = true;
  previousNum = 0;

  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";
  document.querySelector(".player-0-panel").classList.add("active");
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  hideDice();
}

function hideDice(){
  document.getElementById("dice-1").style.display = "none";
  document.getElementById("dice-2").style.display = "none";
}

/*
Challenge:

1. A player looses his entire score when he rolls two six in a row. After that,
it's the next player's turn. (Hint: always save the previous dice roll in a
separate variable)
2. Add an input field to HTML where players can set the winning score, so that
they can change the predefined score of 100. (Hint: you can read that value with
.value property in javascript)
3. Add another dice to the game, so that there two dices now. The player looses
his current score when one of them is a 1. (Hint: you will need CSS to position
the second dice, so take a look at the CSS code for the first one)
*/
