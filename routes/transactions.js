// Required Packages
const express = require("express");

// Define Router
const router = express.Router();

// Transactions Controller
const TransactionsController = require("../controllers/TransactionsController");

// Authenticate Middleware
const authenticate = require("../middleware/authenticate");

// @route POST api/transactions/create
// @desc Create a transaction
// @access Private
router.post("/create", authenticate, TransactionsController.createTransaction);

// Export Router
module.exports = router;
