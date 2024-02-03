// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  function substitution(input, alphabet, encode = true) {
      // Check if the alphabet is valid
      if (!isValidAlphabet(alphabet)) return false;

      // Define the standard alphabet
      const standardAlphabet = 'abcdefghijklmnopqrstuvwxyz';
      
      // Create an object to store the substitution mapping
      const substitutionMap = {};
      for (let i = 0; i < standardAlphabet.length; i++) {
          substitutionMap[standardAlphabet[i]] = alphabet[i];
      }

      // Encode or decode the input based on the encode parameter
      let result = '';
      for (let char of input.toLowerCase()) {
          if (char === ' ') {
              result += ' ';
          } else {
              const mappedChar = encode ? substitutionMap[char] : getKeyByValue(substitutionMap, char);
              result += mappedChar;
          }
      }
      return result;
  }

  // Function to check if the alphabet is valid
  function isValidAlphabet(alphabet) {
      if (!alphabet) return false;
      // Check if the alphabet length is not 26
      if (alphabet.length !== 26) return false;
      // Check if all characters in the alphabet are unique
      const uniqueChars = new Set(alphabet);
      if (uniqueChars.size !== alphabet.length) return false;
      return true;
  }

  // Function to get the key of an object by its value
  function getKeyByValue(object, value) {
      return Object.keys(object).find(key => object[key] === value);
  }

  return {
      substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
