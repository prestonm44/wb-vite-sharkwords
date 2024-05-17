import getRandomWord from './src/randomWord.js';
import setSharkImage from './src/sharkImage.js';
import setupWord from './src/word.js';
import { isLetterInWord, revealLetterInWord } from './src/word.js';
import setupGuesses from './src/guess.js';
import './style.css';

document.querySelector('#app').innerHTML = `
  <section id="shark-img"></section>

  <section id="game-status"></section>

  <section id="word-container"></section>

  <section id="letter-buttons"></section>
`;


const initSharkwords = () => {
  
  const sharkImgE1 = document.querySelector('#shark-img')

  let numWrong = 0;
  
  const word = getRandomWord();
  
  console.log(document.querySelector('#shark-img'))
  setSharkImage(sharkImgE1, numWrong);
  setupWord(document.querySelector('#word-container'), word);
  // for debugging:
  
  console.log(`[INFO] Correct word is: ${word}`);

  const handleGuess = (guessEvent, letter) => {
    const button = guessEvent.target;
    button.setAttribute('disabled', true);
    const isWordComplete = Array.from(document.querySelectorAll('.letter-box')).every(
      (el) => el.innerText !== '',
    );

  if (isLetterInWord(letter)) {
    revealLetterInWord(letter);
  } else {
    numWrong += 1;
    setSharkImage(sharkImgE1, numWrong)
  }
};

  setupGuesses(document.querySelector('#letter-buttons'), handleGuess);
  

  return initSharkwords;
};

document.querySelectorAll('button').forEach((btn) => {
  btn.setAttribute('disabled', true);
});

initSharkwords(setSharkImage);

