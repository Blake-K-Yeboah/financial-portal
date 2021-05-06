// Chakra UI Components
import { Container, Grid, GridItem } from "@chakra-ui/react";

// useEffect Hook
import { useEffect } from "react";

// Helmet to Access Head
import { Helmet } from "react-helmet";

// Page Components
import Navbar from "../../layout/Navbar";
import Sidebar from "../../layout/Sidebar";
import BankAccountsBox from "./BankAccountsBox";
import TransactionsBox from "./TransactionsBox";
import TotalSpentBox from "./TotalSpentBox";

// useDispatch
import { useDispatch, useSelector } from "react-redux";

// useHistory hook to redirect user
import { useHistory } from "react-router";

// Axios for HTTP Requests
import axios from "axios";

// Store Actions
import { setBankAccounts } from "../../../slicers/bankAccountsSlice";
import { setUser } from "../../../slicers/authSlice";

const Home = () => {
   const dispatch = useDispatch();

   const history = useHistory();

   const token = useSelector((state) => state.auth.token);

   useEffect(() => {
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
               setTimeout(() => {
                  localStorage.removeItem("token");
                  dispatch(setUser(null));
                  history.push("/login");
               });
            }
         });
   }, [dispatch, history, token]);

   return (
      <>
         <Helmet>
            <title>Financial Portal - Home</title>
         </Helmet>
         <>
            <Navbar />
            <Container maxW="container.xl" h="75vh" mt={16}>
               <Grid
                  h="100%"
                  templateRows="repeat(5, 1fr)"
                  templateColumns="repeat(8, 1fr)"
                  gap={4}
               >
                  <GridItem rowSpan={5} colSpan={2}>
                     <Sidebar page="home" />
                  </GridItem>
                  <GridItem colSpan={2}>
                     <BankAccountsBox />
                  </GridItem>
                  <GridItem colSpan={2}>
                     <TransactionsBox />
                  </GridItem>
                  <GridItem colSpan={2}>
                     <TotalSpentBox />
                  </GridItem>
                  <GridItem colSpan={6} rowSpan={4} bg="green.300" />
               </Grid>
            </Container>
         </>
      </>
   );
};

export default Home;
