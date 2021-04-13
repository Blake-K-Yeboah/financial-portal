// Required Packages
const express = require("express");

// Define Router
const router = express.Router();

// Bank Accounts Controller
const BankAccountsController = require("../controllers/BankAccountsController");

// Authenticate Middleware
const authenticate = require("../middleware/authenticate");

// Check ID Middleware
const checkId = require("../middleware/checkId");

// @route GET api/bankaccounts
// @desc Get all bank accounts
// @access Private
router.get("/", authenticate, BankAccountsController.getAll);

// @route GET api/bankaccounts/:id
// @desc Get bank account by ID
// @access Private
router.get("/:id", authenticate, checkId, BankAccountsController.getById);

// Export Router
module.exports = router;
