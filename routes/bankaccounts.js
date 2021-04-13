// Required Packages
const express = require("express");

// Define Router
const router = express.Router();

// Bank Accounts Controller
const BankAccountsController = require("../controllers/BankAccountsController");

// Authenticate Middleware
const authenticate = require("../middleware/authenticate");

// @route GET api/bankaccounts
// @desc Get all bank accounts
// @access Private
router.get("/", authenticate, BankAccountsController.getAll);

// Export Router
module.exports = router;
