// Bank Account Model
const BankAccount = require("../models/bankaccount");

// Validation Function
const { validateTransactionInput } = require("../validation/transactions");

// Create a transaction
const createTransaction = async (req, res) => {
   const { errors, isValid } = validateTransactionInput(req.body);

   if (!isValid) {
      return res.status(400).json({ errors });
   }

   const bankAccount = await BankAccount.findById(req.body.bankId);

   if (!bankAccount) {
      return res
         .status(404)
         .json({ errors: { account: "No bank account with that id." } });
   }

   if (bankAccount.userId !== req.user._id) {
      return res.status(400).json({
         errors: {
            user: "You dont own the bank account you wish to make changes to.",
         },
      });
   }

   bankAccount.transactions.push({
      type: req.body.type,
      memo: req.body.memo,
      amount: parseInt(req.body.amount),
   });

   try {
      await bankAccount.save();
      return res.json(bankAccount);
   } catch (err) {
      return res.status(500).json({
         errors: { server: "An error occured. Try again later." },
      });
   }
};

module.exports = {
   createTransaction,
};
