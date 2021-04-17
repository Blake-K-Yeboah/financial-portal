// Household Model
const Household = require("../models/household");

const User = require("../models/user");

// Validation Function
const { validateHouseholdInput } = require("../validation/households");

// Create Household
const createHousehold = async (req, res) => {
   const { errors, isValid } = validateHouseholdInput(req.body);

   if (!isValid) {
      return res.status(400).json({ errors });
   }

   const household = new Household({
      name: req.body.name,
      greeting: req.body.greeting,
      owner: req.user._id,
   });

   const user = await User.findById(req.user._id);
   user.role = "owner";

   try {
      await household.save();
      await user.save();
      return res.json(household);
   } catch (err) {
      return res.status(500).json({
         errors: { server: "An error occured. Try again later." },
      });
   }
};

// Get Household By User's ID
const getHouseholdByUser = async (req, res) => {
   switch (req.user.role) {
      case "owner":
         return res.json(await Household.findOne({ owner: req.user._id }));
      case "member":
         return res.json(await Household.findOne({ members: req.user._id }));
      default:
         return res
            .status(400)
            .json({ errors: { user: "User is not in a household" } });
   }
};

// Join Household
const joinHousehold = async (req, res) => {
   const household = await Household.findById(req.params.id);

   if (!household) {
      return res
         .status(400)
         .json({ errors: { household: "Invitational code is invalid" } });
   }

   household.members.push(req.user._id);

   const user = await User.findById(req.user._id);
   user.role = "member";

   try {
      await household.save();
      await user.save();
      res.json(household);
   } catch (err) {
      return res.status(500).json({
         errors: { server: "An error occured. Try again later." },
      });
   }
};

// Leave Household
const leaveHousehold = async (req, res) => {
   const household = await Household.findById(req.params.id);

   if (!household) {
      return res
         .status(400)
         .json({ errors: { household: "Invitational code is invalid" } });
   }

   household.members = household.members.filter((id) => id != req.user._id);

   const user = await User.findById(req.user._id);
   user.role = "personal";

   try {
      await household.save();
      await user.save();
      res.json(household);
   } catch (err) {
      return res.status(500).json({
         errors: { server: "An error occured. Try again later." },
      });
   }
};

// TODO Invite User To Household

// TODO Delete Household

// Export Functions
module.exports = {
   createHousehold,
   getHouseholdByUser,
   joinHousehold,
   leaveHousehold,
};
