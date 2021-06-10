// Chakra UI Components
import { Box, chakra, Heading, Text, Spinner, Button } from "@chakra-ui/react";

// useSelector hook to access state
import { useSelector } from "react-redux";

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

   const role = useSelector((state) => state.auth.user.role);
   const hasHousehold = role !== "personal";

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
               {bankAccount.hasOwnProperty("linkedTo") &&
               bankAccount.linkedTo !== "" ? (
                  <Text fontSize={16} color="gray.600" mt={3}>
                     <chakra.span fontWeight="medium">Linked To: </chakra.span>
                     Your Household
                  </Text>
               ) : hasHousehold ? (
                  <Button colorScheme="green" size="sm" mt={6}>
                     Link To Household
                  </Button>
               ) : (
                  <Button colorScheme="gray" size="sm" mt={6} disabled>
                     Link To Household
                  </Button>
               )}
            </>
         ) : (
            <Spinner color="green.400" />
         )}
      </Box>
   );
};

export default BankAccountDetails;
