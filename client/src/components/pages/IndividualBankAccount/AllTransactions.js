// Chakra UI Components
import {
   Box,
   Heading,
   Text,
   Table,
   Thead,
   Tbody,
   Tr,
   Th,
} from "@chakra-ui/react";

// Components
import Transaction from "./Transaction";

const AllTransactions = ({ bankAccount }) => {
   return (
      <Box
         w="100%"
         h="100%"
         maxH="100%"
         bg="white"
         boxShadow="sm"
         position="relative"
         p={8}
         borderRadius={8}
         overflowY="scroll"
         sx={{
            "&::-webkit-scrollbar": {
               width: "5px",
               backgroundColor: "gray.50",
            },
            "&::-webkit-scrollbar-thumb": {
               backgroundColor: `green.400`,
            },
         }}
      >
         <Heading as="h3" size="md" color="gray.600">
            Transactions
         </Heading>

         {bankAccount && bankAccount.transactions.length === 0 ? (
            <Text mt={4} color="gray.600">
               You have no transactions for this account.
            </Text>
         ) : bankAccount ? (
            <Table variant="simple" mt={4} w="100%">
               <Thead>
                  <Tr>
                     <Th>Amount</Th>
                     <Th>Memo</Th>
                     <Th>Date</Th>
                     <Th>Actions</Th>
                  </Tr>
               </Thead>
               <Tbody>
                  {bankAccount.transactions.map((transaction) => (
                     <Transaction
                        transaction={transaction}
                        bankAccountID={bankAccount._id}
                     />
                  ))}
               </Tbody>
            </Table>
         ) : (
            "..."
         )}
      </Box>
   );
};

export default AllTransactions;
