const express = require("express");
const router = express.Router();
const admins = require("../models/adminModel");

router.post("/", (req, res) => {
  const admin = new admins(req.body);
  admin.save();
  res.status(201).json(admin);
});

router.post("/adminlogin", async (req, res) => {
  const admin = await admins.findOne(req.body);
  if (admin) {
    res.status(201).json(admin);
  } else {
    res.status(201).json("Wrong credentials");
  }
});

router.get("/:id", async (req, res) => {
  const admin = await admins.findById(req.params.id);
  admin.save();
  res.status(201).json(admin);
});

router.put("/update/:id", async (req, res) => {
  const admin = await admins.findByIdAndUpdate(req.params.id, req.body);
  admin.save();
  res.status(201).json(admin);
});

router.delete("/delete/:id", async (req, res) => {
  const admin = await admins.findByIdAndDelete(req.params.id);
  admin.save();
  res.status(201).json(admin);
});

module.exports = router;