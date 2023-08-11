const express = require("express");
const router = express.Router();
const sales = require("../models/salesModel");

router.post("/order", (req, res) => {
  const orders = new sales(req.body);
  orders.save();
  res.status(200).json(orders);
});

router.get("/vieworders", async (req, res) => {
  const viewOrders = await sales.find();
  res.status(201).json(viewOrders);
});

module.exports = router;
