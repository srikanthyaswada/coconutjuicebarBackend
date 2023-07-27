const express = require("express");
const router = express.Router();
const product = require("../models/productsModel");

router.post("/", (req, res) => {
  const addProduct = new product(req.body);
  addProduct.save();
  res.status(201).json(addProduct);
});

router.get("/:id", async (req, res) => {
  const viewProductById = await product.findById(req.params.id);
  viewProductById.save();
  res.status(201).json(viewProductById);
});

router.put("/update/:id", async (req, res) => {
  const updateProduct = await product.findByIdAndUpdate(
    req.params.id,
    req.body
  );
  updateProduct.save();
  res.status(201).json(updateProduct);
});

router.delete("/delete/:id", async (req, res) => {
  const deleteProduct = await product.findByIdAndDelete(req.params.id);
  deleteProduct.save();
  res.status(201).json(deleteProduct);
});

module.exports = router;
