// Bank Account Model
const BankAccount = require("../models/bankaccount");

// Create a transaction
const createTransaction = async (req, res) => {
   res.send("Create Transaction");
};

module.exports = {
   createTransaction,
};
