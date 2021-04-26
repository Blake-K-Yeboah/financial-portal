import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const AuthRoute = (props) => {
   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

   if (isAuthenticated) {
      return <Redirect to="/" />;
   } else {
      return <Route exact path={props.route} render={() => props.children} />;
   }
};

export default AuthRoute;
