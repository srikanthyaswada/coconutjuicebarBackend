const express = require("express");
const mongoose = require("mongoose");

const adminRoute = require("./routes/adminRoute");
const productRoute = require("./routes/productsRoute");
const employeeRoute = require("./routes/employeesRoute");
const expenseRoute = require("./routes/expenseRoute");
const salesRoute = require("./routes/salesRoute");

const dotenv = require("dotenv");
dotenv.config();

const app = express();
port = 8000;

const cors = require("cors");
let corsOptions = {
  origin: ["http://localhost:8000"],
};

mongoose
  .connect(process.env.dbUrl)
  .then(console.log("DB connected"))
  .catch((err) => {
    console.log("DB not connected");
  });

app.use(cors());

app.use(express.json());

app.use("/admin", cors(corsOptions), adminRoute);

app.use("/product", cors(corsOptions), productRoute);

app.use("/employees", cors(corsOptions), employeeRoute);

app.use("/expenses", cors(corsOptions), expenseRoute);

app.use("/sales", cors(corsOptions), salesRoute)

app.listen(port, (err) => {
  if (!err) {
    console.log(`Server Started on Port ${port}`);
  } else {
    console.log("Error in server connection");
  }
});
