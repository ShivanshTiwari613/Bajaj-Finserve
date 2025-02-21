// models/bfhlModel.js

/**
 * Process the input data array.
 * Separates numbers and alphabets and determines the highest alphabet.
 *
 * @param {Array} inputArray - Array of string items from the request.
 * @returns {Object} Object containing numbers, alphabets, and highest_alphabet.
 */
function processData(inputArray) {
    const numbers = [];
    const alphabets = [];
  
    inputArray.forEach(item => {
      // If the item consists entirely of digits, treat it as a number.
      if (/^\d+$/.test(item)) {
        numbers.push(item);
      } 
      // If the item is a single letter, consider it an alphabet.
      else if (/^[a-zA-Z]$/.test(item)) {
        alphabets.push(item);
      }
    });
  
    // Determine the highest alphabet (last in A-Z order, case-insensitive)
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
  