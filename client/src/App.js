// useEffect Hook
import { useEffect } from "react";

// Import React Router Stuff
import {
   BrowserRouter as Router,
   Redirect,
   Route,
   Switch,
} from "react-router-dom";

// Import Pages
import Register from "./components/pages/Register/Register";
import Login from "./components/pages/Login/Login";

// useDispatch hook and useSelector hook
import { useDispatch, useSelector } from "react-redux";

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

   // isAuthenticated
   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

   return (
      <Router>
         <Switch>
            <Route
               exact
               path="/register"
               render={(props) => {
                  if (isAuthenticated) return <Redirect to="/" />;
                  return <Register {...props} />;
               }}
            />
            <Route
               exact
               path="/login"
               render={(props) => {
                  if (isAuthenticated) return <Redirect to="/" />;
                  return <Login {...props} />;
               }}
            />
         </Switch>
      </Router>
   );
};

export default App;
