const express = require("express");
const router = express.Router();
const product = require("../models/productsModel");

router.post("/addproduct", (req, res) => {
  const addProduct = new product(req.body);
  addProduct.save();
  res.status(201).json(addProduct);
});

router.get("/viewproducts", async (req, res) => {
  const produts = await product.find();
  res.status(201).json(produts);
});

router.get("/viewproducts/:id", async (req, res) => {
  const viewProductById = await product.findById(req.params.id);
  viewProductById.save();
  res.status(201).json(viewProductById);
});

router.put("/updateproduct/:id", async (req, res) => {
  const updateProduct = await product.findByIdAndUpdate(
    req.params.id,
    req.body
  );
  res.status(201).json(updateProduct);
});

router.delete("/deleteproduct/:id", async (req, res) => {
  const deleteProduct = await product.findByIdAndDelete(req.params.id);
  res.status(201).json(deleteProduct);
});

module.exports = router;
