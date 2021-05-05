// Chakra UI Components
import { Container, Grid, GridItem } from "@chakra-ui/react";

// useEffect Hook
import { useEffect } from "react";

// Helmet to Access Head
import { Helmet } from "react-helmet";

// Page Components
import Navbar from "../../layout/Navbar";
import Sidebar from "../../layout/Sidebar";

// useDispatch
import { useDispatch } from "react-redux";

// Axios for HTTP Requests
import axios from 'axios';

// Store Actions
import { setBankAccounts } from '../../../slicers/bankAccountsSlice';
import BankAccountsBox from "./BankAccountsBox";

const Home = () => {

   const dispatch = useDispatch();

   useEffect(() => {
      const fetchBankAccounts = async () => {
         try {
            const res = await axios.get("/api/bankaccounts", { headers: {
               'Authorization': `Bearer ${localStorage.getItem('token')}`
            }});
            dispatch(setBankAccounts(res.data));
         } catch(err) {
            alert("An error occured");
            console.error(err);
         }
      }

      fetchBankAccounts();
   }, [dispatch]);

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
                  templateRows="repeat(4, 1fr)"
                  templateColumns="repeat(8, 1fr)"
                  gap={4}
               >
                  <GridItem rowSpan={4} colSpan={2}>
                     <Sidebar page="home" />
                  </GridItem>
                  <GridItem colSpan={2}>
                     <BankAccountsBox />
                  </GridItem>
                  <GridItem colSpan={2} bg="green.100" />
                  <GridItem colSpan={2} bg="green.100" />
                  <GridItem colSpan={6} rowSpan={3} bg="green.300" />
               </Grid>
            </Container>
         </>
      </>
   );
};

export default Home;
