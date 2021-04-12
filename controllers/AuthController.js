// User Model
const User = require("../models/user");

// Validation Functions
const { validateRegisterInput } = require("../validation/auth");

// Register User
const registerUser = async (req, res) => {
   const { errors, isValid } = validateRegisterInput(req.body);

   if (!isValid) {
      return res.status(400).json({ errors });
   }

   // TODO: Check there is no user with same email
   // TODO: Hash password
   // TODO: Save user to database
   // TODO: Return JWT token
};

module.exports = {
   registerUser,
};
