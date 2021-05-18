const getRandomNumber = (numbersCalled) => {
  let randomNumber = Math.random(1, 76);

  while (numbersCalled.includes(randomNumber)) {
    randomNumber = Math.random(1, 76);
  }

  return randomNumber;
};

module.exports = {
  getRandomNumber,
};
