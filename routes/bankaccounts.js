// Required Packages
const express = require("express");

// Define Router
const router = express.Router();

// Bank Accounts Controller
const BankAccountsController = require("../controllers/BankAccountsController");

// Test Request
router.get("/", (req, res) => res.send("Bank Accounts Here"));

// Export Router
module.exports = router;
