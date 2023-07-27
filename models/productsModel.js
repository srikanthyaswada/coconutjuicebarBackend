const mongoose = require("mongoose");

const addProductSchema = new mongoose.Schema(
  {
    productname: {
      type: String,
    },
    image: {
      type: String,
    },
    quantity: {
      type: String,
    },
    price: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("product", addProductSchema);
