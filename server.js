const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// Route handler for the home page
app.get("/", (req, res) => {
  res.send(`
      <h1>99 Bottles of beer on the wall</h1>
      <a href="/98">Take one down, pass it around</a>
    `);
});

// Route handler for the number of bottles page
app.get("/:number_of_bottles", (req, res) => {
  const numberOfBottles = parseInt(req.params.number_of_bottles);
  // console.log(numberOfBottles);

  let link = "";
  if (numberOfBottles > 0) {
    const nextNumber = numberOfBottles - 1;
    link = `<a href="/${nextNumber}">Take one down, pass it around</a>`;
  }

  res.send(`
      <h1>${numberOfBottles} Bottles of beer on the wall</h1>
      ${link}
      <br />
      <a href="/">Start over</a>
    `);
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
