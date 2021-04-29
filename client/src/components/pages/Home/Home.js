import { Helmet } from "react-helmet";
import Navbar from "../../layout/Navbar";

const Home = () => {
   return (
      <>
         <Helmet>
            <title>Financial Portal - Home</title>
         </Helmet>
         <div>
            <Navbar />
         </div>
      </>
   );
};

export default Home;
