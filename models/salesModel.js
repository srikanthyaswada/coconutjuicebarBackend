const mongoose = require("mongoose");

const salesSchema = new mongoose.Schema(
  {
    mobilenumber: {
      type: Number,
    },
    orderDetails: [
      {
        product: {
          type: String,
        },
        price: {
          type: Number,
        },
        quantity: {
          type: Number,
        },
        total: {
          type: Number,
        },
      },
    ],
    grandTotal: {
      type: Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("sales", salesSchema);
