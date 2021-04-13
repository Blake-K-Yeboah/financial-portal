// Require Bank Account Model
const BankAccount = require("../models/bankaccount");

// Get all bank accounts
const getAll = async (req, res) => {
   try {
      const accounts = await BankAccount.find();
      return res.json(accounts);
   } catch (err) {
      return res.status(500).json({
         errors: { server: "An error occured. Try again later." },
      });
   }
};

// Get bank account by id
const getById = async (req, res) => {
   try {
      const account = await BankAccount.findById(req.params.id);
      if (!account)
         return res
            .status(404)
            .json({ errors: { account: "Bank account not found" } });
      return res.json(account);
   } catch (err) {
      return res.status(500).json({
         errors: { server: "An error occured. Try again later." },
      });
   }
};

// Export Functions
module.exports = {
   getAll,
   getById,
};
