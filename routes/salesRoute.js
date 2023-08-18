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

router.get("/mobilenumber", async (req, res) => {
  const viewOrderByMobilenumber = await sales.findOne(
    "mobilenumber",
    req.query.mobilenumber
  );
  res.status(200).json(viewOrderByMobilenumber);
});
module.exports = router;
