const mongoose = require("mongoose");

const addExpensesSchema = new mongoose.Schema(
  {
    selectdate: {
      type: String,
    },
    bills: {
      enum: ["coconut", "food", "rent", "wages", "powerbill"],
      type: String,
    },
    amount: {
      type: String,
    },
    remarks: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("expenses", addExpensesSchema);
