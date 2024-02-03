const expect = require("chai").expect;
const { caesar } = require("../src/caesar");

describe("caesar", () => {
  it("should return false if the shift value is equal to 0, less than -25, greater than 25, or not present", () => {
    expect(caesar("thinkful", 0)).to.be.false;
    expect(caesar("thinkful", -26)).to.be.false;
    expect(caesar("thinkful", 26)).to.be.false;
    expect(caesar("thinkful")).to.be.false;
  });

  it("should ignore capital letters", () => {
    expect(caesar("A Message", 3)).to.equal("d phvvdjh");
    expect(caesar("a message", 3)).to.equal("d phvvdjh");
  });

  it("should handle shifts that go past the end of the alphabet", () => {
    expect(caesar("Zebra Magazine", 3)).to.equal("cheud pdjdclqh");
  });

  it("should maintain spaces and other nonalphabetic symbols", () => {
    expect(caesar("A Message!", 3)).to.equal("d phvvdjh!");
  });

  it("should decode the message if encode is set to false", () => {
    expect(caesar("d phvvdjh", 3, false)).to.equal("a message");
  });
});
