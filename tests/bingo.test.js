const { getRandomNumber } = require("../bingo");

describe("Bingo test functionalities", () => {
  it("get random number should be unique", () => {
    const randomNumber = getRandomNumber([1, 2]);

    expect(randomNumber).not.toBe(1);
    expect(randomNumber).not.toBe(2);
  });
});
