const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.get("/", (req, res) => {
  res.end("This is the end.");
});

console.log("All is well!");

app.listen(PORT, () => console.log("You are now connected on port" + PORT));
