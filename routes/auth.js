// Required Packages
const express = require("express");

// Define Router
const router = express.Router();

// Authentication Controller
const AuthController = require("../controllers/AuthController");

// @route POST api/auth/register
// @desc Register a new user
// @access Public
router.get("/register", AuthController.registerUser);

// Export Router
module.exports = router;
