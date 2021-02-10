import { alphabet } from './alphabet.js';
import { loadWord } from './ajax.js';
// DOM
const grid = document.getElementById('input-letter-grid');
const wordAjax = document.querySelector('.generateBtn');
const wordDiv = document.getElementById('guess-word-box');
const score = document.querySelector('.score');
// const press = document.querySelector('.press-letter');

// Array where letter will be save and access
let letters = [];

// create Grid for letter keyboard function
alphabet.forEach((elem, i) => {
  const div = document.createElement('div');
  div.classList.add('box', `alpha${65 + i}`);
  grid.appendChild(div);
  div.textContent = elem;
});

// For access json file using ajax
wordAjax.addEventListener('click', loadWord);

// Generate word
export const generateWord = (json) => {
  // Restart Values
  //   press.textContent = '';
  wordDiv.textContent = '';
  letters = [];
  let word = '';

  // Destructure json file to get random words
  for (const [...array] of json) {
    const randomNumber = Math.trunc(Math.random() * array.length + 1);
    word = array[randomNumber];
  }

  // Create div for each letter
  for (var i = 0; i < word.length; i++) {
    const div = document.createElement('div');
    div.classList.add('letterBox', `box${i}`);
    wordDiv.appendChild(div);
    let upperWord = word[i].toUpperCase();
    letters.push(upperWord);
  }
};

// Event
//Listen to Mouse Press
grid.addEventListener('click', (e) => {
  // the listener will only be on box class
  if (e.target.classList.contains('box')) {
    let mouseTarget = e.target.textContent;
    //   press.textContent = mouseTarget;
    const elem = e.target.classList[1];
    //   document.querySelector('elem').classList.remove('light');
    checkInput(mouseTarget, elem);
  }
});

// Listen to keyboard press
document.addEventListener('keydown', (e) => {
  if (e.keyCode >= 65 && e.keyCode <= 90) {
    let keyboardTarget = e.key.toUpperCase();
    // press.textContent = keyboardTarget;
    const elem = `alpha${e.keyCode}`;
    checkInput(keyboardTarget, elem);
  } else {
    return;
  }
});

// Check if there are matched letter from the random word
const checkInput = (letter, elem) => {
  document.querySelector(`.${elem}`).classList.add('light');
  setTimeout(() => {
    document.querySelector(`.${elem}`).classList.remove('light');
  }, 150);

  if (letters.includes(letter)) {
    const indices = [];
    let index = letters.indexOf(letter);
    while (index != -1) {
      indices.push(index);
      index = letters.indexOf(letter, index + 1);
    }
    indices.forEach((i) => {
      document.querySelector(`.box${i}`).textContent = letters[i];
    });
  } else {
  }
};
