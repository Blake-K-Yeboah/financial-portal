const { model, Schema } = require("mongoose");

// Define Bank Account Schema
const BankAccountSchema = new Schema({
   name: String,
   type: String,
   balance: Number,
   lowBalanceAlert: Number,
   transactions: [
      {
         id: String,
         type: String, // Deposit, Withdrawal, Point of Sale
         memo: String,
         amount: Number,
         date: { type: Date, default: Date.now() },
      },
   ],
   createdAt: {
      type: Date,
      default: Date.now,
   },
   linkedTo: String,
   userId: String,
});

module.exports = BankAccount = model("bankAccounts", BankAccountSchema);
