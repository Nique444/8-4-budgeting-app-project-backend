const express = require("express");
const transactions = express.Router();

const transactionData = require("../models/transaction.js");

//INDEX
transactions.get("/", (req, res) => {
  res.json(transactionData);
});

//SHOW


module.exports = transactions;
