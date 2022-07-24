const express = require("express");
const transactions = express.Router();

const transactionData = require("../models/transaction.js");

//INDEX
transactions.get("/", (req, res) => {
  res.json(transactionData);
});

//SHOW
transactions.get("/:index", (req, res) => {
  const { index } = req.params;
  if (transactionData[index]) {
    res.json(transactionData[index]);
  } else {
    res.status(302).redirect("/");
  }
  //redirected to home page if index does not exist//
});

//CREATE
transactions.post("/", (req, res) => {
  transactionData.push(req.body);
  res.json(transactionData[transactionData.length - 1]);
});

//DESTROY
transactions.delete("/:index", (req, res) => {
  const deletedTransaction = transactionData.splice(req.params.index, 1);
  res.status(200).json(deletedTransaction);
});

//UPDATE
transactions.put("/:index", (req, res) => {
  transactionData[req.params.index] = req.body;
  res.status(200).json(transactionData[req.params.index]);
});

module.exports = transactions;
