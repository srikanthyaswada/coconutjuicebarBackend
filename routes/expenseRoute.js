const express = require("express");
const router = express.Router();
const expenses = require("../models/expensesModel");

router.post("/addexpenses", (req, res) => {
  const addExpenses = new expenses(req.body);
  addExpenses.save();
  res.status(201).json(addExpenses);
});

router.get("/viewexpenses", async (req, res) => {
  const viewExpenses = await expenses.find();
  res.status(201).json(viewExpenses);
});

router.get("/viewexpenses/:id", async (req, res) => {
  const viewExpenseById = await expenses.findById(req.params.id);
  viewExpenseById.save();
  res.status(201).json(viewExpenseById);
});

module.exports = router;
