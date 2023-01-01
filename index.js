const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
dotenv.config();

// ROUTES
app.get("/products", (req, res) => {
  const key = req.header("api-key");
  if (key !== "brittany") {
    res.status(400).send("You are not brittany! Goodbye!");
  }
  res.status(200).json([
    {
      name: "Brittany",
      favoriteGame: "Animal Crossing",
      Goals: "You need to diet, fatass.",
      kids: [
        { name: "Julian", age: 6 },
        { name: "Ava", age: 2 },
      ],
    },
  ]);
});

app.listen(PORT, () => console.log("You are now connected on port", PORT));
