const express = require("express");
const app = express();

app.use(express.json());

const transactionsController = require("./controllers/transactions.js");

app.get("/", (req, res) => {
  res.send("Welcome to Budgeting App");
});

app.use("/transactions", transactionsController)

module.exports = app;


//need cors to connect to react frontend application//