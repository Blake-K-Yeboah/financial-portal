// useHistory Hook to redirect user
import { useHistory } from "react-router-dom";

// Chakra UI Components
import { Tr, Td, Flex, Button } from "@chakra-ui/react";
import { useSelector } from "react-redux";

const BankAccountTableRow = ({ account }) => {
   const userRole = useSelector((state) => state.auth.user.role);

   let history = useHistory();

   const redirectUser = (route) => {
      history.push(route);
   };

   const capitalise = (str) => {
      return `${str[0].toUpperCase()}${str.substring(1, str.length)}`;
   };
   const date = new Date(account.createdAt);

   const dateOutput = `${date.toLocaleString("en-us", {
      weekday: "long",
   })}, ${date.getDate()} ${date.toLocaleString("default", {
      month: "long",
   })} ${date.getFullYear()} - ${
      date.getHours() > 12 ? date.getHours() - 12 : date.getHours()
   }:${date.getMinutes()} ${date.getHours() > 12 ? "PM" : "AM"}`;

   return (
      <Tr key={account._id}>
         <Td>{account.name}</Td>
         <Td>{capitalise(account.type)}</Td>
         <Td>{dateOutput}</Td>
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
               {userRole === "owner" ? (
                  <Button colorScheme="red" variant="outline" size="sm" ml={4}>
                     Delete Account
                  </Button>
               ) : (
                  ""
               )}
            </Flex>
         </Td>
      </Tr>
   );
};

export default BankAccountTableRow;
