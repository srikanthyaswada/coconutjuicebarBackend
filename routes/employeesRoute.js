const express = require("express");
const router = express.Router();
const employee = require("../models/empModel");

const cors = require("cors");
let corsOptions = {
  origin: ["http://localhost:8000"],
};

router.post("/", cors(corsOptions), (req, res) => {
  const addEmployee = new employee(req.body);
  addEmployee.save();
  res.status(201).json(addEmployee);
});

router.get("/viewemployees", cors(corsOptions), async (req, res) => {
  const viewEmployees = await employee.find();
  res.status(201).json(viewEmployees);
});

router.get("/:id", cors(corsOptions), async (req, res) => {
  const viewEmpById = await employee.findById(req.params.id);
  viewEmpById.save();
  res.status(201).json(viewEmpById);
});

router.put("/update/:id", cors(corsOptions), async (req, res) => {
  const updateEmployee = await employee.findByIdAndUpdate(
    req.params.id,
    req.body
  );
  updateEmployee.save();
  res.status(201).json(updateEmployee);
});

router.delete("/delete/:id", cors(corsOptions), async (req, res) => {
  const deleteEmployee = await employee.findByIdAndDelete(req.params.id);
  deleteEmployee.save();
  res.status(201).json(deleteEmployee);
});

module.exports = router;
