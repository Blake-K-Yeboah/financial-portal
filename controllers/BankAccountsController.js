// Require Bank Account Model
const BankAccount = require("../models/bankaccount");

// Get all bank accounts
const getAll = async (req, res) => {
   try {
      const accounts = await BankAccount.find();
      return res.json(accounts);
   } catch (err) {
      return res.json({
         errors: { server: "An error occured. Try again later." },
      });
   }
};

// Export Functions
module.exports = {
   getAll,
};
