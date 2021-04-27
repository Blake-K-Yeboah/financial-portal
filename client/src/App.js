// useEffect Hook
import { useEffect } from "react";

// Import React Router Stuff
import { BrowserRouter as Router, Switch } from "react-router-dom";

// Import Pages
import Register from "./components/pages/Register/Register";

// Import AuthRoute Utility
import AuthRoute from "./util/AuthRoute";

// useDispatch hook
import { useDispatch } from "react-redux";

// setUser action
import { setUser } from "./slicers/authSlice";

const App = () => {
   // Redux Dispatch
   const dispatch = useDispatch();

   useEffect(() => {
      const token = localStorage.getItem("token");

      if (token) {
         dispatch(setUser(token));
      }
   }, []);

   return (
      <Router>
         <Switch>
            <AuthRoute route="/register">
               <Register />
            </AuthRoute>
         </Switch>
      </Router>
   );
};

export default App;
