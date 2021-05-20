// Axios for HTTP Requests
import axios from "axios";

// Store Actions
import { setBankAccounts } from "../slicers/bankAccountsSlice";
import { setUser } from "../slicers/authSlice";

export const fetchBankAccounts = (token, dispatch, history) => {
   axios
      .get("/api/bankaccounts", {
         headers: {
            Authorization: `Bearer ${token}`,
         },
      })
      .then((res) => {
         dispatch(setBankAccounts(res.data));
      })
      .catch((err) => {
         if (err.response.status === 401) {
            alert("Session expired. Please login again");
            localStorage.removeItem("token");
            dispatch(setUser(null));
            history.push("/login");
         }
      });
};
