// Chakra UI Components
import {
   Box,
   chakra,
   Heading,
   Text,
   Spinner,
   Button,
   Flex,
   useDisclosure,
   Input,
   Select,
} from "@chakra-ui/react";

// useState Hook
import { useEffect, useState } from "react";

// Components
import DeleteAccountDialog from "../BankAccounts/DeleteAccountDialog";

const BankAccountDetails = ({ bankAccount }) => {
   const date = bankAccount ? new Date(bankAccount.createdAt) : null;

   const dateDisplay = date
      ? `${date.toLocaleString("en-us", {
           weekday: "long",
        })}, ${date.getDate()} ${date.toLocaleString("default", {
           month: "long",
        })} ${date.getFullYear()} - ${
           date.getHours() > 12 ? date.getHours() - 12 : date.getHours()
        }:${date.getMinutes()} ${date.getHours() > 12 ? "PM" : "AM"}`
      : "";

   const { isOpen, onOpen, onClose } = useDisclosure();

   const [editingStatus, setEditingStatus] = useState(false);

   const [userInput, setUserInput] = useState({ name: "", type: "" });

   const inputChange = (e) => {
      setUserInput({ ...userInput, [e.target.id]: e.target.value });
   };

   useEffect(() => {
      if (bankAccount) {
         setUserInput({ name: bankAccount.name, type: bankAccount.type });
      }
   }, [bankAccount]);

   const updateHandler = () => {
      // TODO: Update Handler
   };

   return (
      <>
         <DeleteAccountDialog
            bankAccount={bankAccount}
            isOpen={isOpen}
            onClose={onClose}
         />
         <Box
            w="100%"
            h="100%"
            maxH="100%"
            bg="white"
            boxShadow="sm"
            position="relative"
            p={8}
            borderRadius={8}
         >
            <Heading as="h3" size="md" color="gray.600" mb={4}>
               Bank Account Details
            </Heading>

            {bankAccount ? (
               <>
                  <Text
                     fontSize={16}
                     color="gray.600"
                     display={editingStatus ? "flex" : ""}
                  >
                     <chakra.span fontWeight="medium">Name: </chakra.span>
                     {!editingStatus ? (
                        bankAccount.name
                     ) : (
                        <Input
                           size="xs"
                           w={180}
                           value={userInput.name}
                           id="name"
                           onChange={inputChange}
                           ml={4}
                        />
                     )}
                  </Text>
                  <Text
                     fontSize={16}
                     color="gray.600"
                     mt={3}
                     display={editingStatus ? "flex" : ""}
                  >
                     <chakra.span fontWeight="medium">Type: </chakra.span>
                     {!editingStatus ? (
                        bankAccount.type[0].toUpperCase() +
                        bankAccount.type.substring(1, bankAccount.type.length)
                     ) : (
                        <Select
                           size="xs"
                           w={180}
                           value={userInput.type}
                           id="type"
                           onChange={inputChange}
                           ml={4}
                        >
                           <option value="checking">Checking</option>
                           <option value="savings">Savings</option>
                           <option value="credit">Credit</option>
                        </Select>
                     )}
                  </Text>
                  <Text fontSize={16} color="gray.600" mt={3}>
                     <chakra.span fontWeight="medium">Created At: </chakra.span>
                     {dateDisplay}
                  </Text>
                  <Flex mt={6}>
                     {!editingStatus ? (
                        <>
                           <Button
                              colorScheme="green"
                              size="sm"
                              onClick={setEditingStatus.bind(this, true)}
                           >
                              Edit Details
                           </Button>
                           <Button
                              colorScheme="red"
                              size="sm"
                              ml={4}
                              onClick={onOpen}
                           >
                              Delete Account
                           </Button>
                        </>
                     ) : (
                        <>
                           <Button
                              colorScheme="green"
                              size="sm"
                              onClick={updateHandler}
                           >
                              Update
                           </Button>
                           <Button
                              colorScheme="red"
                              size="sm"
                              ml={4}
                              onClick={setEditingStatus.bind(this, false)}
                           >
                              Cancel
                           </Button>
                        </>
                     )}
                  </Flex>
               </>
            ) : (
               <Spinner color="green.400" />
            )}
         </Box>
      </>
   );
};

export default BankAccountDetails;
