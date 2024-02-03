const { polybius } = require("../src/polybius");
const expect = require("chai").expect;

describe("polybius", () => {
  describe("encoding", () => {
    it("should translate the letters i and j to 42", () => {
      const actual = polybius("ij");
      const expected = "4242";
      expect(actual).to.equal(expected);
    });

    it("should ignore capital letters", () => {
      const actual = polybius("Ij");
      const expected = "4242";
      expect(actual).to.equal(expected);
    });

    it("should maintain spaces in the message", () => {
      const actual = polybius("i j");
      const expected = "42 42";
      expect(actual).to.equal(expected);
    });
  });

  describe("decoding", () => {
    it("should translate 42 to (i/j)", () => {
      const actual = polybius("42", false);
      const expected = "(i/j)";
      expect(actual).to.equal(expected);
    });

    it("should ignore capital letters", () => {
      const actual = polybius("42 42", false);
      const expected = "(i/j) (i/j)";
      expect(actual).to.equal(expected);
    });

    it("should maintain spaces in the message", () => {
      const actual = polybius("42 42", false);
      const expected = "(i/j) (i/j)";
      expect(actual).to.equal(expected);
    });
  });
});
