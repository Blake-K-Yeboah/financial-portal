module.exports.validateTransactionInput = (input) => {
   // Define errors
   let errors = {};

   // Return errors and isValid boolean
   return {
      errors,
      isValid: !Object.keys(errors).length,
   };
};
