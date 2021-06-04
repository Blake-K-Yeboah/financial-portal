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
   Td,
   Flex,
} from "@chakra-ui/react";

// Icons
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";

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
                  {bankAccount.transactions.map((transaction) => {
                     const date = new Date(transaction.date);

                     const dateOutput = `${date.toLocaleString("en-us", {
                        weekday: "long",
                     })}, ${date.getDate()} ${date.toLocaleString("default", {
                        month: "long",
                     })} ${date.getFullYear()} - ${
                        date.getHours() > 12
                           ? date.getHours() - 12
                           : date.getHours()
                     }:${date.getMinutes()} ${
                        date.getHours() > 12 ? "PM" : "AM"
                     }`;

                     return (
                        <Tr key={transaction._id}>
                           <Td
                              color={
                                 transaction.type === "deposit"
                                    ? "green.400"
                                    : "red.400"
                              }
                              fontWeight="medium"
                           >
                              ${transaction.amount}
                           </Td>
                           <Td fontSize="sm">{transaction.memo}</Td>
                           <Td fontSize="sm">{dateOutput}</Td>
                           <Td>
                              <Flex>
                                 <EditIcon
                                    w={5}
                                    h={5}
                                    color="green.400"
                                    cursor="pointer"
                                 />
                                 <DeleteIcon
                                    ml={2}
                                    w={5}
                                    h={5}
                                    color="red.400"
                                    cursor="pointer"
                                 />
                              </Flex>
                           </Td>
                        </Tr>
                     );
                  })}
               </Tbody>
            </Table>
         ) : (
            "..."
         )}
      </Box>
   );
};

export default AllTransactions;
