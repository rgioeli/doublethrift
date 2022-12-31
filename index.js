const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.get("/:name", (req, res) => {
  const name = req.params("name");
  const data = {
    name: "Robert",
    age: 32,
    kids: [
      {
        name: "Julian",
        age: 6,
      },
      {
        name: "Ava",
        age: 2,
      },
    ],
  };
  const dataToSendBack = data.kids.filter((n) => n.name == name);
  res.json(dataToSendBack);
});

console.log("All is well!");

app.listen(PORT, () => console.log("You are now connected on port" + PORT));
