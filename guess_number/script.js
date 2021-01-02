'use strict';

// DOM
const scoreText = document.querySelector('.score');
const secretNumber = document.querySelector('.number');

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When no input
  if (!guess) {
    displayMessage('No number');

    // When player wins
  } else if (guess === number) {
    displayMessage('😃 You Won!');
    document.body.style.backgroundColor = 'green';
    secretNumber.textContent = number;
    secretNumber.style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  // When guess is wrong
  else if (guess !== number) {
    if (score > 1) {
      displayMessage(guess > number ? '🤪 Too High!' : '🤣 Too low');
      score--;
      scoreText.textContent = score;
    } else {
      displayMessage('😱 You lost!');
      scoreText.textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  number = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  scoreText.textContent = '20';
  displayMessage('Start guessing');
  secretNumber.textContent = '?';
  secretNumber.style.width = '15rem';
  secretNumber.value = '';
  document.body.style.backgroundColor = 'rgb(236, 233, 51)';
});
