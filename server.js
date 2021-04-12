// Required Modules
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Initiate express server
const app = express();

// Environment variables config to use '.env' file
require("dotenv").config();

// CORS middleware
app.use(cors());

// Store mongouri to connect to
const db = process.env.MONGOURI;

// Connect to Database
mongoose
   .connect(db, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
   })
   .then(() => console.log("MongoDB successfully connected."))
   .catch((err) => console.log(err));

// Define port variable to run server
const port = process.env.PORT;

// Listen on port defined above
app.listen(port, () => {
   console.log("🚀 Server running on port: " + port);
});
