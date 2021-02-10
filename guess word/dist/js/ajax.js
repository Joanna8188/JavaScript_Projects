import { generateWord } from './app.js';
export function loadWord() {
  const word = new XMLHttpRequest();

  word.open('GET', './js/words.json', true);
  word.onload = function () {
    if (this.status == 200) {
      const json = JSON.parse(this.responseText);
      const value = Object.values(json);
      //   const wordArray = value;
      generateWord(value);
      //   console.log(wordArray);
    }
  };
  word.send();
}
