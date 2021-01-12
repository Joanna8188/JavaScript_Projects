//Challenge 1: Age in Days

function ageInDays() {
  var birthYear = prompt('What year were you born?');
  var ageInDays = (2020 - birthYear)  * 365;
  var h1 = document.createElement('h1');
  var textAnswer = document.createTextNode('You are ' + ageInDays + ' days');
  h1.setAttribute('id','ageInDays');
  h1.appendChild(textAnswer);
  document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
  document.getElementById('ageInDays').remove();
}



//Challenge 2: Cat Generator
function generateCat() {
  var image = document.createElement('img');
  var div = document.getElementById('flex-cat-gen');
  image.src = "http://thecatapi.com/api/images/get?format=src&type=gif&size=small"
  div.appendChild(image);
}



//Challenge 3: Rock, Paper, scissor
function rpsGame(yourChoice) {
  var humanChoice, botChoice;

  botChoice = randToRpsInt(); // My version
  // botChoice = numberToChoice(randToRpsInt());

  humanChoice = yourChoice.id;
  results = decideWinner(humanChoice, botChoice);

  // message = finalMessage(results);
  // console.log(message);

  rpsFrontEnd(humanChoice, botChoice, results);
}

// function randToRpsInt () {
//   return Math.floor(Math.random() * 3);
// }
//
// function numberToChoice(number) {
//   var a = ['rock', 'paper', 'scissor'][number];
//   console.log(a);
//   return a;
// }

function randToRpsInt() { // My version
  var randNumber = Math.floor(Math.random() * 3);
  return ['rock', 'paper', 'scissors'][randNumber];
}

function decideWinner(you, computer) { // My version
  var rpsDatabase = {
    rock: {scissors:1, rock:0.5, paper:0},
    paper: {rock:1, paper:0.5, scissors:0},
    scissor: {paper:1, scissors:0.5, rock:0}
  };

  var yourScore = rpsDatabase[you][computer];
  var computerScore = rpsDatabase[computer][you];

  if(yourScore === 0) {
    return {message: 'You lost!', color: 'red'};
  }
  else if(yourScore === 0.5){
    return {message: 'You Tied!', color: 'yellow'};
  } else {
    return {message: 'You Win!', color: 'green'};
  }
  // return [yourScore, computerScore];

}

// function finalMessage(yourScore, computerScore) {
//   console.log(computerScore);
//   if(yourScore === 0) {
//     return {message: 'You lost!', color: 'red'};
//   }
//   else if(yourScore === 0.5){
//     return {message: 'You Tied!', color: 'yellow'};
//   } else {
//     return {message: 'You Win!', color: 'green'};
//   }
// }

function rpsFrontEnd(humanChoice, botChoice, finalMessage) {
  var imagesDatabase = {
    rock: document.getElementById('rock').src,
    paper: document.getElementById('paper').src,
    scissor: document.getElementById('scissors').src,
  }

  //Remove images
  document.getElementById('rock').remove();
  document.getElementById('paper').remove();
  document.getElementById('scissors').remove();


  var humanDiv = document.createElement('div');
  var botDiv = document.createElement('div');
  var messageDiv = document.createElement('div');

  humanDiv.innerHTML = "<img src='" + imagesDatabase[humanChoice] + "' height=150 width = 150 style='box-shadow: 0px 10px 50px rgba(37,50, 233, 1);'>"
  messageDiv.innerHTML = "<h1 style='color: " + finalMessage.color + "; font-size: 60px; padding: 30px;'>" + finalMessage.message + "</h1>"
  botDiv.innerHTML = "<img src='" + imagesDatabase[botChoice] + "' height=150 width = 150 style='box-shadow: 0px 10px 50px rgba(243,38, 24, 11);'>"

  //
  document.getElementById('flex-box-rps-div').appendChild(humanDiv);
  document.getElementById('flex-box-rps-div').appendChild(messageDiv);
  document.getElementById('flex-box-rps-div').appendChild(botDiv);
}



//Challenge 4: Change the Color of all Buttons
var all_buttons = document.getElementsByTagName('button');
var copyAllButtons = [];
for(var i = 0; i < all_buttons.length; i++) {
  copyAllButtons.push(all_buttons[i].classList[1]);
}

function buttonColorChange(colorThingy){
  if(colorThingy.value === "red"){
    buttonsRed();
  } else if(colorThingy.value === "green"){
    buttonsGreen();
  } else if(colorThingy.value === "random"){
    randomColor();
  } else if(colorThingy.value === "reset"){
    resetColorButton();
  }
}

function buttonsRed() {
  for(let i = 0; i<all_buttons.length; i++){
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add('btn-danger');
  }
}

function buttonsGreen() {
  for(let i = 0; i<all_buttons.length; i++){
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add('btn-success');
  }
}

function resetColorButton() {
  for(let i = 0; i<all_buttons.length; i++){
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add(copyAllButtons[i]);
  }
}

function randomColor() {
  var choices = ["btn-warning", "btn-success", "btn-danger", "btn-primary"];

  for(var i = 0; i < all_buttons.length; i++) {
    let randomNumber = Math.floor(Math.random() * 4);
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add(choices[randomNumber]);
  }
}


//Challenge 5: Blackjack
let blackjackGame = {
  you: {scoreSpan: '#your-blackjack-result', div: '#your-box', score: 0},
  dealer: {scoreSpan: '#dealer-blackjack-result', div: '#dealer-box', score: 0},
  cards: ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'],
  cardsMap: {'2':2, '3':3, '4':4, '5':5, '6':6, '7':7, '8':8, '9':9, '10':10, 'J':10, 'Q':10, 'K':10, 'A':[1,11]},
  wins: 0,
  loss: 0,
  draws: 0,
  isStand: false,
  turnsOver: false,
};

const YOU = blackjackGame['you'];
const DEALER = blackjackGame['dealer'];

const hitSound = new Audio('sounds/swish.m4a');
const winSound = new Audio('sounds/cash.mp3');
const lossSound = new Audio('sounds/aww.mp3');

document.querySelector('#blackjack-hit-button').addEventListener('click', blackjackHit);
document.querySelector('#blackjack-stand-button').addEventListener('click', dealerLogic);
document.querySelector('#blackjack-deal-button').addEventListener('click', blackjackDeal);

// Control the showing of card by wrapping it into an if statement
function blackjackHit() {

  if(blackjackGame['isStand'] === false){
    let card = randomCard();
    showCard(card, YOU);
    updateScore(card, YOU);
    showScore(YOU);
  }
}

function randomCard() {
  let randomIndex = Math.floor(Math.random() * 13);
  return blackjackGame['cards'][randomIndex];
}


function showCard(card, activePlayer) {
  let cardImage = document.createElement('img');
  cardImage.src = `images/cards/${card}.png`;
  document.querySelector(activePlayer['div']).appendChild(cardImage);
  hitSound.play();
}

function blackjackDeal() {
  if(blackjackGame['turnsOver'] === true){
  //refresh the data
    blackjackGame['isStand'] = false;
    blackjackGame['turnsOver'] = false;

    let yourImages = document.querySelector('#your-box').querySelectorAll('img');
    let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img');

    for(var i = 0; i < yourImages.length; i++) {
      yourImages[i].remove();
    }
    for(i = 0; i < dealerImages.length; i++) {
      dealerImages[i].remove();
    }

    YOU['score'] = 0;
    DEALER['score'] = 0;

    document.querySelector(YOU['scoreSpan']).textContent = 0;
    document.querySelector(YOU['scoreSpan']).style.color = '#fff';
    document.querySelector(DEALER['scoreSpan']).textContent = 0;
    document.querySelector(DEALER['scoreSpan']).style.color = '#fff';

    document.querySelector('#blackjack-result').textContent = "Let's Play!";
    document.querySelector('#blackjack-result').style.color = 'black';
  }
}

function updateScore(card, activePlayer){
  if(card === 'A') {
    if(activePlayer['score'] + blackjackGame['cardsMap'][card][1] <= 21){
      activePlayer['score'] += blackjackGame['cardsMap'][card][1];
    } else {
      activePlayer['score'] += blackjackGame['cardsMap'][card][0];
    }

  } else {
    activePlayer['score'] += blackjackGame['cardsMap'][card];

  }
  console.log(activePlayer['score']);
}

function showScore(activePlayer) {
  if(activePlayer['score'] > 21){
    document.querySelector(activePlayer['scoreSpan']).textContent = 'BUSTED';
    document.querySelector(activePlayer['scoreSpan']).style.color = 'red';
  } else {
    document.querySelector(activePlayer["scoreSpan"]).textContent = activePlayer["score"];
  }
}

function sleep(ms){
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function dealerLogic() {
  blackjackGame['isStand'] = true;

  while(DEALER['score'] < 16 && blackjackGame['isStand'] === true){
    let card = randomCard();
    showCard(card, DEALER);
    updateScore(card, DEALER);
    showScore(DEALER);
    await sleep(1000);
  }

  blackjackGame['turnsOver'] = true;
  let winner = computeWinner();
  return showResult(winner);
}

function computeWinner(){
  let winner;

  if(YOU['score'] <= 21){
    if(YOU['score'] > DEALER['score'] || DEALER['score'] > 21){
      winner = YOU;
    }
    else if(YOU['score'] === DEALER['score']){
    }
    else if(YOU['score'] < DEALER['score'] && DEALER['score'] <= 21){
      winner = DEALER;
    }
  }
  else if(YOU['score'] > 21){
    if(DEALER['score'] <= 21){
      winner = DEALER;
    } else if(DEALER['score'] > 21){
    }
  }
  return winner;
}

function showResult(winner){
  let message, messageCOlor;

  if(winner === YOU){
    message = 'You Win!';
    messageColor = 'green';
    winSound.play();
    blackjackGame['wins']++;
    document.querySelector("#wins").textContent = blackjackGame['wins'];
  }
  else if(winner === DEALER){
    message = 'You Lost!';
    messageColor = 'red';
    lossSound.play();
    blackjackGame['loss']++;
    document.querySelector("#loss").textContent = blackjackGame['loss'];
  }
  else {
    message = 'You Drew';
    messageColor = 'black';
    blackjackGame['draws']++;
    document.querySelector("#draws").textContent = blackjackGame['draws'];
  }

  document.querySelector('#blackjack-result').textContent = message;
  document.querySelector('#blackjack-result').style.color = messageColor;

}
