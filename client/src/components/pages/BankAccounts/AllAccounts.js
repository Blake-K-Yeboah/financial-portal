// Chakra UI Components
import {
   Box,
   Heading,
   Table,
   Thead,
   Tbody,
   Tr,
   Th,
   Td,
   Flex,
   Button,
   Text,
} from "@chakra-ui/react";

// useSelector Hook to access state
import { useSelector } from "react-redux";

// useHistory Hook to redirect user
import { useHistory } from "react-router-dom";

// Add Icon For Create Bank Account Btn
import { AddIcon } from "@chakra-ui/icons";

const AllAccounts = () => {
   const user = useSelector((state) => state.auth.user);

   const bankAccounts = useSelector((state) => {
      return state.bankAccounts.bankAccounts.filter(
         (account) => account.userId === user._id
      );
   });

   const capitalise = (str) => {
      return `${str[0].toUpperCase()}${str.substring(1, str.length)}`;
   };

   let history = useHistory();

   const redirectUser = (route) => {
      history.push(route);
   };

   return (
      <Box
         w="100%"
         h="100%"
         maxH="75vh"
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
            Your Bank Accounts
         </Heading>

         <Button
            colorScheme="green"
            size="md"
            position="absolute"
            top={8}
            right={8}
         >
            <AddIcon mr={2} /> Create Bank Account
         </Button>

         {bankAccounts.length === 0 ? (
            <Text mt={8} color="gray.700" fontSize="md">
               You have no bank accounts.
            </Text>
         ) : (
            <Table variant="simple" mt={12} w="100%">
               <Thead>
                  <Tr>
                     <Th>Name</Th>
                     <Th>Type</Th>
                     <Th>Transactions Count</Th>
                     <Th>Actions</Th>
                  </Tr>
               </Thead>
               <Tbody>
                  {bankAccounts.map((account) => {
                     return (
                        <Tr>
                           <Td>{account.name}</Td>
                           <Td>{capitalise(account.type)}</Td>
                           <Td>{account.transactions.length}</Td>
                           <Td>
                              <Flex>
                                 <Button
                                    colorScheme="green"
                                    size="sm"
                                    onClick={redirectUser.bind(
                                       this,
                                       `/bank-accounts/${account._id}`
                                    )}
                                 >
                                    View Account
                                 </Button>
                                 <Button
                                    colorScheme="green"
                                    variant="outline"
                                    size="sm"
                                    ml={4}
                                    onClick={redirectUser.bind(
                                       this,
                                       `/bank-accounts/${account._id}/edit`
                                    )}
                                 >
                                    Edit Account
                                 </Button>
                              </Flex>
                           </Td>
                        </Tr>
                     );
                  })}
               </Tbody>
            </Table>
         )}
      </Box>
   );
};

export default AllAccounts;
