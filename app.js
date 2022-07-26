const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.use(express.json());

const transactionsController = require("./controllers/transactions.js");

app.get("/", (req, res) => {
  res.send("Welcome to Budgeting App");
});

app.use("/transactions", transactionsController);

app.get("*", (req, res) => {
  res.status(404).json({ error: "Page Not Found" });
});

module.exports = app;
