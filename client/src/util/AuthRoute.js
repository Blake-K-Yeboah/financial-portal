import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const AuthRoute = (props) => {
   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

   if (props.isProtected) {
      return (
         <Route
            exact
            path={props.route}
            render={() => {
               if (!isAuthenticated) return <Redirect to="/register" />;
               return props.children;
            }}
         />
      );
   } else {
      return (
         <Route
            exact
            path={props.route}
            render={() => {
               if (isAuthenticated) return <Redirect to="/" />;
               return props.children;
            }}
         />
      );
   }
};

export default AuthRoute;
