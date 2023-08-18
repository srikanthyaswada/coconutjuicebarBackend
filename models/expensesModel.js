const mongoose = require("mongoose");

const addExpensesSchema = new mongoose.Schema(
  {
    selectdate: {
      type: String,
    },
    bills: {
      enum: ["coconut", "fruits","sugar", "rent", "salary", "powerbill"],
      type: String,
    },
    amount: {
      type: Number,
    },
    remarks: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("expenses", addExpensesSchema);
