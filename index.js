const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

app.use(cors());

app.get("/", (req, res) => {
  res.end("This is the end.");
});

app.listen(PORT, () => console.log("You are now connected on port" + PORT));
