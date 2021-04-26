// Import React Router Stuff
import { BrowserRouter as Router, Switch } from "react-router-dom";

// Import Pages
import Register from "./components/pages/Register/Register";

// Import AuthRoute Utility
import AuthRoute from "./util/AuthRoute";

function App() {
   return (
      <>
         <Router>
            <Switch>
               <AuthRoute route="/register">
                  <Register />
               </AuthRoute>
               <AuthRoute route="/" isProtected>
                  <h1>Home</h1>
               </AuthRoute>
            </Switch>
         </Router>
      </>
   );
}

export default App;
