const express = require("express");
const app = express();
const port = 3000;
const { verifyBingoCard, generateBingoCard } = require("./bingo");

app.get("/", (req, res) => {
  const cardBingo = generateBingoCard();

  const numbersCalled = [
    7, 29, 35, 56, 66, 1, 27, 44, 50, 64, 3, 28, 41, 54, 73, 6, 25, 40, 53, 72,
    14, 24, 33, 55, 62,
  ];

  console.log(verifyBingoCard(cardBingo, numbersCalled));

  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
