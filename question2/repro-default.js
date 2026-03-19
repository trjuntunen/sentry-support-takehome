require("dotenv").config();
require("./instrument-default");

const express = require("express");

const app = express();

app.get("/about", (req, res) => {
  res.send("About page");
});

app.listen(3000, () => {
  console.log("Default repro listening on http://localhost:3000");
});