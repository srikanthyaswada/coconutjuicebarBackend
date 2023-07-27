const express = require("express");
const mongoose = require("mongoose");

const productRoute = require("./routes/productsRoute");
const employeeRoute = require("./routes/employeesRoute");
const adminlogin = require("./routes/adminRoute");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
port = 8000;

mongoose
  .connect(process.env.dbUrl)
  .then(console.log("DB connected"))
  .catch((err) => {
    console.log("DB not connected");
  });

app.use(express.json());
app.use("/", adminlogin);
app.use("/product", productRoute);
app.use("/viewproducts", productRoute);
app.use("/employees", employeeRoute);

app.listen(port, (err) => {
  if (!err) {
    console.log(`Server Started on Port ${port}`);
  } else {
    console.log("Error in server connection");
  }
});
