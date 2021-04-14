// Require Bank Account Model
const BankAccount = require("../models/bankaccount");

// Validate Bank Account Input Function
const { validateBankAccountInput } = require("../validation/bankaccounts");

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

// Create Bank Account
const createBankAccount = async (req, res) => {
   const { errors, isValid } = validateBankAccountInput(req.body);

   if (!isValid) return res.status(400).json({ errors });

   const bankAccount = await BankAccount.findOne({
      name: req.body.name,
      userId: req.user._id,
   });

   if (bankAccount) {
      return res.status(400).json({
         errors: { name: "You already have a bank account with that name" },
      });
   }

   try {
      const newBankAccount = new BankAccount({
         name: req.body.name,
         type: req.body.type,
         balance: req.body.balance,
         lowBalanceAlert: req.body.lowBalanceAlert,
         userId: req.user._id,
      });

      await newBankAccount.save();

      res.json(newBankAccount);
   } catch (err) {
      return res.status(500).json({
         errors: { server: "An error occured. Try again later." },
      });
   }
};

// TODO: Edit Bank Account

// Export Functions
module.exports = {
   getAll,
   getById,
   createBankAccount,
};
