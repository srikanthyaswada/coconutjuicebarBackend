const express = require("express");
const router = express.Router();
const employee = require("../models/empModel");

router.post("/", (req, res) => {
  const addEmployee = new employee(req.body);
  addEmployee.save();
  res.status(201).json(addEmployee);
});

router.get("/:id", async (req, res) => {
  const viewEmpById = await employee.findById(req.params.id);
  viewEmpById.save();
  res.status(201).json(viewEmpById);
});

router.put("/update/:id", async (req, res) => {
  const updateEmployee = await employee.findByIdAndUpdate(
    req.params.id,
    req.body
  );
  updateEmployee.save();
  res.status(201).json(updateEmployee);
});

router.delete("/delete/:id", async (req, res) => {
  const deleteEmployee = await employee.findByIdAndDelete(req.params.id);
  deleteEmployee.save();
  res.status(201).json(deleteEmployee);
});

module.exports = router;
