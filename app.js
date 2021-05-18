const express = require("express");
const app = express();
const port = 3000;
const { verifyBingoCard } = require("./bingo");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
