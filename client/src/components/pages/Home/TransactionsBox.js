// Chakra Ui Components
import {
   Stat,
   StatHelpText,
   StatLabel,
   StatNumber,
   Box,
} from "@chakra-ui/react";

// useSelector
import { useSelector } from "react-redux";

const TransactionsBox = () => {
   const user = useSelector((state) => state.auth.user);

   const bankAccounts = useSelector((state) =>
      state.bankAccounts.bankAccounts.filter(
         (account) => account.userId === user._id
      )
   );

   const userCreatedAt = user.createdAt.substring(0, 9).replaceAll("-", "/");

   const reverseDate = () => {
      return `${userCreatedAt.substring(8, 9)}/${userCreatedAt.substring(
         5,
         7
      )}/${userCreatedAt.substring(0, 4)}`;
   };

   const calculateTransactionCount = () => {
      let total = 0;

      bankAccounts.forEach((account) => {
         total += account.transactions.length;
      });

      return total;
   };

   return (
      <Box w="100%" h="100%" bg="white" boxShadow="sm" p={8} borderRadius={8}>
         <Stat>
            <StatLabel>Transactions</StatLabel>
            <StatNumber>{calculateTransactionCount()}</StatNumber>
            <StatHelpText>Since {reverseDate()}</StatHelpText>
         </Stat>
      </Box>
   );
};

export default TransactionsBox;
