import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slicers/authSlice";
import bankAccountsReducer from "./slicers/bankAccountsSlice";

export default configureStore({
   reducer: {
      auth: authReducer,
      bankAccounts: bankAccountsReducer,
   },
});
