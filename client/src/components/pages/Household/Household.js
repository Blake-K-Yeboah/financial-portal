// Chakra UI Components
import { Container, Grid, GridItem } from "@chakra-ui/react";

// useEffect Hook
import { useEffect } from "react";

// Helmet to Access Head
import { Helmet } from "react-helmet";

// Page Components
import Navbar from "../../layout/Navbar";
import Sidebar from "../../layout/Sidebar";
import HouseholdActions from "./HouseholdActions";
import Members from "./Members";
import HouseholdSpending from "./HouseholdSpending";
import HouseholdDeposits from "./HouseholdDeposits";

// useDispatch
import { useDispatch, useSelector } from "react-redux";

// useHistory hook to redirect user
import { useHistory } from "react-router";

// Api Requests
import {
   fetchBankAccounts,
   fetchHouseholdData,
} from "../../../util/apiRequests";
import HouseholdAccountsAndTransactions from "./HouseholdAccountsAndTransactions";

const Household = () => {
   const dispatch = useDispatch();

   const history = useHistory();

   const token = useSelector((state) => state.auth.token);

   useEffect(() => {
      fetchHouseholdData(token, dispatch, history);
      fetchBankAccounts(token, dispatch, history);
   }, [dispatch, history, token]);

   return (
      <>
         <Helmet>
            <title>Financial Portal - Your Household</title>
         </Helmet>
         <>
            <Navbar page="household" />
            <Container maxW="container.xl" h="75vh" overflowY="hidden" mt={16}>
               <Grid
                  h="100%"
                  templateRows="repeat(5, 1fr)"
                  templateColumns="repeat(8, 1fr)"
                  gap={4}
               >
                  <GridItem rowSpan={5} colSpan={2}>
                     <Sidebar page="household" />
                  </GridItem>
                  <GridItem colSpan={2} rowSpan={1}>
                     <Members />
                  </GridItem>
                  <GridItem colSpan={2} rowSpan={1}>
                     <HouseholdSpending />
                  </GridItem>
                  <GridItem colSpan={2} rowSpan={1}>
                     <HouseholdDeposits />
                  </GridItem>
                  <GridItem colSpan={6} rowSpan={3}>
                     <HouseholdAccountsAndTransactions />
                  </GridItem>
                  <GridItem colSpan={6} rowSpan={1}>
                     <HouseholdActions />
                  </GridItem>
               </Grid>
            </Container>
         </>
      </>
   );
};

export default Household;
