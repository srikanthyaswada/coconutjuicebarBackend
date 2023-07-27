const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
    },

    lastname: {
      type: String,
    },
    gender: {
      type: String,
      enum: ["male", "female", "others"],
    },
    email: {
      type: String,
    },
    mobile: {
      type: Number,
    },
    role: {
      type: String,
      enum: ["manager", "employee"],
    },
    address: {
      type: String,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("employees", employeeSchema);
