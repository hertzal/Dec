// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
      // Polybius square map
      const polybiusSquare = {
          a: '11', b: '21', c: '31', d: '41', e: '51',
          f: '12', g: '22', h: '32', i: '42', j: '42',
          k: '52', l: '13', m: '23', n: '33', o: '43',
          p: '53', q: '14', r: '24', s: '34', t: '44',
          u: '54', v: '15', w: '25', x: '35', y: '45',
          z: '55'
      };
  
      // Helper function to decode numbers
      function decodeNumbers(input) {
          let result = '';
          let i = 0;
          while (i < input.length) {
              // If the current character is a space, add it to the result
              if (input[i] === ' ') {
                  result += ' ';
                  i++;
              } else {
                  // Take two characters at a time
                  const pair = input.substr(i, 2);
                  // If the pair is '42', add '(i/j)' to the result
                  if (pair === '42') {
                      result += '(i/j)';
                      i += 2;
                  } else {
                      // Otherwise, find the letter corresponding to the pair and add it to the result
                      let found = false;
                      for (const letter in polybiusSquare) {
                          if (polybiusSquare[letter] === pair) {
                              result += letter;
                              found = true;
                              break;
                          }
                      }
                      if (!found) return false; // Return false if pair not found
                      i += 2;
                  }
              }
          }
          return result;
      }
  
      // Encode the input
      if (encode) {
          // Convert input to lowercase
          input = input.toLowerCase();
          let result = '';
          // Iterate through each character of the input
          for (let char of input) {
              // If the character is a space, add it to the result
              if (char === ' ') {
                  result += ' ';
              } else {
                  // Otherwise, find the corresponding number and add it to the result
                  result += polybiusSquare[char];
              }
          }
          return result;
      } else { // Decode the input
          // Check if the number of characters excluding spaces is odd
          const charCount = input.replace(/\s/g, '').length;
          if (charCount % 2 !== 0) return false; // Return false if the count is odd
          // Otherwise, decode the numbers
          return decodeNumbers(input);
      }
  }
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
