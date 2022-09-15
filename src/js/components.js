const characterCountSpan = document.querySelector('#characterCount');
const wordCountSpan = document.querySelector('#wordsCount');

characterCountSpan.innerHTML = 0;
wordCountSpan.innerHTML = 0;

let charactersCount = 0;
let wordsCount = 0;


export const counterInput = (allText) => {
  const charactersCounter = allText.replace(/\s+/g, '').trim().length;
  const wordsCounter = allText.split(' ').length;
  
  
  charactersCount = charactersCounter;
  characterCountSpan.innerHTML = charactersCounter;


  wordsCount = wordsCounter;
  wordCountSpan.innerHTML = wordsCounter;

};