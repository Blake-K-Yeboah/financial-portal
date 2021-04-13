// Required Packages
const mongoose = require("mongoose");

module.exports = (req, res, next) => {
   const id = req.params.id;

   if (mongoose.Types.ObjectId.isValid(id)) {
      next();
   } else {
      return res
         .status(400)
         .json({ errors: { id: "ID must be of type MongoDB ObjectID" } });
   }
};
