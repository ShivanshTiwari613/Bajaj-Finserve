// models/bfhlModel.js

function processData(inputArray) {
    const numbers = [];
    const alphabets = [];
  
    inputArray.forEach(item => {
      if (/^\d+$/.test(item)) {
        numbers.push(item);
      } 
      else if (/^[a-zA-Z]$/.test(item)) {
        alphabets.push(item);
      }
    });
  
    let highest_alphabet = [];
    if (alphabets.length > 0) {
      let highest = alphabets[0];
      alphabets.forEach(letter => {
        if (letter.toUpperCase() > highest.toUpperCase()) {
          highest = letter;
        }
      });
      highest_alphabet.push(highest);
    }
  
    return { numbers, alphabets, highest_alphabet };
  }
  
  module.exports = { processData };
  