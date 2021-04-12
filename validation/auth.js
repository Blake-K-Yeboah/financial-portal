module.exports.validateRegisterInput = (input) => {
   // Define errors as empty object
   let errors = {};

   // Validate name
   if (!input.name || input.name.trim() === "") {
      errors.name = "Name field is required";
   }

   // Validate email
   if (
      !input.email ||
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.email)
   ) {
      errors.email = "Email is not valid";
   }

   // Validate Password
   if (!input.password) {
      errors.password = "Password is required";
   } else if (input.password.length < 8) {
      errors.password = "Passwords is less than 8 characters";
   }

   // Returns errors object and isValid boolean
   return {
      errors,
      isValid: !Object.keys(errors).length,
   };
};
