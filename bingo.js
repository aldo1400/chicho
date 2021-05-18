const getRandomNumber = (numbersCalled, min = 1, max = 75) => {
  let randomNumber = Math.floor(Math.random() * (max - min)) + min;

  while (numbersCalled.includes(randomNumber)) {
    randomNumber = Math.floor(Math.random() * (max - min)) + min;
  }

  return randomNumber;
};

const generateBingoCard = () => {
  const bingoCard = [];
  const numbersCalled = [];

  const ranges = [
    [1, 15],
    [16, 30],
    [31, 45],
    [46, 60],
    [61, 75],
  ];

  for (let i = 0; i < 5; i++) {
    bingoCard[i] = [];
    for (let j = 0; j < 5; j++) {
      bingoCard[i][j] = getRandomNumber(
        numbersCalled,
        ranges[j][0],
        ranges[j][1]
      );

      numbersCalled.push(bingoCard[i][j]);
    }
  }

  return bingoCard;
};

const verifyBingoCard = (bingoCard, numbersCalled) => {
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (i == 2 && j == 2) {
        continue;
      }

      if (!numbersCalled.includes(bingoCard[i][j])) {
        return false;
      }
    }
  }

  return true;
};

module.exports = {
  getRandomNumber,
  generateBingoCard,
  verifyBingoCard,
};
