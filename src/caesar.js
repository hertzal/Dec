// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // Helper function to shift a single character
  function shiftCharacter(char, shift) {
    // Convert the character to lowercase
    char = char.toLowerCase();
    if (char.match(/[a-z]/)) {
      let code = char.charCodeAt(0);
      code = ((code - 97 + shift) % 26 + 26) % 26 + 97;
      return String.fromCharCode(code);
    }
    return char;
  }

  function caesar(input, shift, encode = true) {
    if (!shift || shift < -25 || shift > 25) return false;
    if (!encode) shift = -shift;
    return input
      .split("")
      .map((char) => shiftCharacter(char, shift))
      .join("");
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
