// Required Packages
const express = require("express");

// Define Router
const router = express.Router();

// Household Controller
const HouseholdController = require("../controllers/HouseholdController");

// Authenticate Middleware
const authenticate = require("../middleware/authenticate");

// @route POST /api/households/create
// @desc Create a household
// @access Private
router.post("/create", authenticate, HouseholdController.createHousehold);

// @route GET /api/households/
// @desc Get a household by user
// @access Private
router.get("/", authenticate, HouseholdController.getHouseholdByUser);

// Export Router
module.exports = router;
