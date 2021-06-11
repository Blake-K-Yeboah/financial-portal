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
} from "@chakra-ui/react";

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
                  <Text fontSize={16} color="gray.600">
                     <chakra.span fontWeight="medium">Name: </chakra.span>
                     {bankAccount.name}
                  </Text>
                  <Text fontSize={16} color="gray.600" mt={3}>
                     <chakra.span fontWeight="medium">Type: </chakra.span>
                     {bankAccount.type[0].toUpperCase() +
                        bankAccount.type.substring(1, bankAccount.type.length)}
                  </Text>
                  <Text fontSize={16} color="gray.600" mt={3}>
                     <chakra.span fontWeight="medium">Created At: </chakra.span>
                     {dateDisplay}
                  </Text>
                  <Flex mt={6}>
                     <Button colorScheme="green" size="sm">
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
