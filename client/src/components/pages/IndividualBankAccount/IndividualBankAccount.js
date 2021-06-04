// Chakra UI Components
import { Container, Grid, GridItem } from "@chakra-ui/react";

// useEffect Hook
import { useEffect, useState } from "react";

// Helmet to Access Head
import { Helmet } from "react-helmet";

// Page Components
import Navbar from "../../layout/Navbar";
import Sidebar from "../../layout/Sidebar";
import CurrentBalance from "./CurrentBalance";
import Spending from "./Spending";
import Deposits from "./Deposits";
import AllTransactions from "./AllTransactions";

// useDispatch
import { useDispatch, useSelector } from "react-redux";

// useHistory hook to redirect user
import { useHistory } from "react-router";

// Axios for HTTP Requests
import axios from "axios";

// Store Actions
import { setUser } from "../../../slicers/authSlice";

const IndividualBankAccount = (props) => {
   const {
      match: { params },
   } = props;

   const dispatch = useDispatch();

   const history = useHistory();

   const token = useSelector((state) => state.auth.token);

   const [bankAccount, setBankAccount] = useState(null);

   useEffect(() => {
      axios
         .get(`/api/bankaccounts/${params.id}`, {
            headers: {
               Authorization: `Bearer ${token}`,
            },
         })
         .then((res) => {
            setBankAccount(res.data);
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
   }, [dispatch, history, token, params.id]);

   return (
      <>
         <Helmet>
            <title>
               Financial Portal - {bankAccount ? bankAccount.name : "..."}
            </title>
         </Helmet>
         <>
            <Navbar page="home" />
            <Container
               maxW="container.xl"
               h={{ base: "120vh", md: "75vh" }}
               overflowY="hidden"
               mt={{ base: -16, md: 16 }}
            >
               <Grid
                  h="100%"
                  templateRows={{
                     base: "repeat(8, 1fr)",
                     md: "repeat(5, 1fr)",
                  }}
                  templateColumns="repeat(8, 1fr)"
                  gap={4}
               >
                  <GridItem
                     rowSpan={{ base: 0, md: 5 }}
                     colSpan={{ base: 0, md: 3, lg: 2 }}
                  >
                     <Sidebar page="bankaccount" />
                  </GridItem>
                  <GridItem
                     colSpan={{ base: 2, sm: 8, md: 2, lg: 2 }}
                     rowSpan={1}
                  >
                     <CurrentBalance bankAccount={bankAccount} />
                  </GridItem>
                  <GridItem
                     colSpan={{ base: 1, sm: 8, md: 1, lg: 2 }}
                     rowSpan={1}
                     background="white"
                     borderRadius={8}
                     boxShadow="sm"
                  >
                     <Spending bankAccount={bankAccount} />
                  </GridItem>
                  <GridItem
                     colSpan={{ base: 2, sm: 8, md: 2, lg: 2 }}
                     rowSpan={1}
                     background="white"
                     borderRadius={8}
                     boxShadow="sm"
                  >
                     <Deposits bankAccount={bankAccount} />
                  </GridItem>
                  <GridItem
                     colSpan={{ base: 5, sm: 8, md: 5, lg: 6 }}
                     rowSpan={2}
                  >
                     <AllTransactions bankAccount={bankAccount} />
                  </GridItem>

                  <GridItem
                     colSpan={{ base: 5, sm: 8, md: 5, lg: 6 }}
                     rowSpan={2}
                     background="white"
                     borderRadius={8}
                     boxShadow="sm"
                  ></GridItem>
               </Grid>
            </Container>
         </>
      </>
   );
};

export default IndividualBankAccount;
