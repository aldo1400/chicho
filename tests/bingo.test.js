const { getRandomNumber, verifyBingoCard } = require("../bingo");

describe("Bingo test functionalities", () => {
  it("get random number should be unique", () => {
    const randomNumber = getRandomNumber([1, 2]);

    expect(randomNumber).not.toBe(1);
    expect(randomNumber).not.toBe(2);
  });

  it("verify card bingo correct", () => {
    const cardBingo = [
      [7, 29, 35, 56, 66],
      [1, 27, 44, 50, 64],
      [3, 28, 41, 54, 73],
      [6, 25, 40, 53, 72],
      [14, 24, 33, 55, 62],
    ];

    const numbersCalled = [
      7, 29, 35, 56, 66, 1, 27, 44, 50, 64, 3, 28, 41, 54, 73, 6, 25, 40, 53,
      72, 14, 24, 33, 55, 62,
    ];

    const isCorrect = verifyBingoCard(cardBingo, numbersCalled);

    expect(isCorrect).toBe(true);
  });
});
