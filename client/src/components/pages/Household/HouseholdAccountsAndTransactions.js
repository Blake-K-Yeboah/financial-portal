// Chakra Ui Components
import {
   Box,
   Heading,
   Spinner,
   TabList,
   TabPanel,
   TabPanels,
   Tabs,
   Tab,
} from "@chakra-ui/react";

// Redux Hooks
import { useSelector } from "react-redux";

const HouseholdAccountsAndTransactions = () => {
   const household = useSelector((state) => state.household.household);

   return (
      <Box w="100%" h="100%" bg="white" boxShadow="sm" p={8} borderRadius={8}>
         {household ? (
            <>
               <Heading
                  as="h3"
                  size="md"
                  color="gray.600"
                  textAlign={{ base: "center", md: "left" }}
               >
                  {household.name}
               </Heading>
               <Tabs mt={5} isFitted>
                  <TabList mb={4}>
                     <Tab
                        fontWeight="medium"
                        color="gray.500"
                        sx={{ _focus: { outline: "none" } }}
                        _selected={{
                           bg: "green.100",
                        }}
                     >
                        Bank Accounts
                     </Tab>
                     <Tab
                        fontWeight="medium"
                        color="gray.500"
                        sx={{ _focus: { outline: "none" } }}
                        _selected={{
                           bg: "green.100",
                        }}
                     >
                        Transactions
                     </Tab>
                  </TabList>
                  <TabPanels>
                     <TabPanel>Accounts Go here</TabPanel>
                     <TabPanel>Transactions Go here</TabPanel>
                  </TabPanels>
               </Tabs>
            </>
         ) : (
            <Spinner color="green.400" />
         )}
      </Box>
   );
};

export default HouseholdAccountsAndTransactions;
