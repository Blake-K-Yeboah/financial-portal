// Required Modules
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Initiate express server
const app = express();

// Environment variables config to use '.env' file
require("dotenv").config();

// CORS Middleware
app.use(cors());

// Parse Body
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Store mongouri to connect to
const db =
   process.env.NODE_ENV !== "testing"
      ? process.env.MONGOURI
      : process.env.TEST_DB;

// Connect to Database
mongoose
   .connect(db, {
      useNewUrlParser: true,
      useFindAndModify: false,
   })
   .then(() => {})
   .catch((err) => console.log(err));

// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/bankaccounts", require("./routes/bankaccounts"));
app.use("/api/transactions", require("./routes/transactions"));
app.use("/api/households", require("./routes/households"));

// Define port variable to run server
const port = process.env.PORT;

if (process.env.NODE_ENV !== "testing") {
   app.listen(port, () => {
      console.log("🚀 Server running on port: " + port);
   });
}

module.exports = app;
