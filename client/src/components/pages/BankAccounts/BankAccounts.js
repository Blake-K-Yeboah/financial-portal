// Chakra UI Components
import { Container, Grid, GridItem, useDisclosure } from "@chakra-ui/react";

// useEffect Hook
import { useEffect } from "react";

// Helmet to Access Head
import { Helmet } from "react-helmet";

// Page Components
import Navbar from "../../layout/Navbar";
import Sidebar from "../../layout/Sidebar";
import AllAccounts from "./AllAccounts";
import CreateBankAccount from "./CreateBankAccount";

// useDispatch
import { useDispatch, useSelector } from "react-redux";

// useHistory hook to redirect user
import { useHistory } from "react-router";

// Api Requests
import { fetchBankAccounts } from "../../../util/apiRequests";

const BankAccounts = () => {
   const dispatch = useDispatch();

   const history = useHistory();

   const token = useSelector((state) => state.auth.token);

   useEffect(() => {
      fetchBankAccounts(token, dispatch, history);
   }, [dispatch, history, token]);

   const { isOpen, onOpen, onClose } = useDisclosure();

   return (
      <>
         <Helmet>
            <title>Financial Portal - Bank Accounts</title>
         </Helmet>
         <>
            <Navbar />
            <Container maxW="container.xl" h="75vh" overflowY="hidden" mt={16}>
               <Grid h="100%" templateColumns="repeat(8, 1fr)" gap={4}>
                  <GridItem colSpan={2}>
                     <Sidebar page="bankaccount" />
                  </GridItem>
                  <GridItem colSpan={6}>
                     <AllAccounts onOpen={onOpen} />
                  </GridItem>
               </Grid>
            </Container>
            <CreateBankAccount modalIsOpen={isOpen} modalOnClose={onClose} />
         </>
      </>
   );
};

export default BankAccounts;
