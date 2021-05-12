// Chakra UI Components
import {
   Modal,
   ModalBody,
   ModalCloseButton,
   ModalContent,
   ModalFooter,
   ModalHeader,
   ModalOverlay,
   FormControl,
   Button,
   FormLabel,
   Input,
   Select,
} from "@chakra-ui/react";
import { useState } from "react";

const CreateBankAccount = ({ isOpen, onClose }) => {
   const [userInput, setUserInput] = useState({
      name: "",
      type: "",
      balance: 0,
      lowBalanceAlert: 0,
   });

   const inputOnChange = (e) => {
      setUserInput({ ...userInput, [e.target.id]: e.target.value });
   };

   return (
      <Modal isOpen={isOpen} onClose={onClose} isCentered size="lg">
         <ModalOverlay />
         <ModalContent>
            <ModalHeader>Create Bank Account</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
               <FormControl mt={4}>
                  <FormLabel>Name</FormLabel>
                  <Input
                     placeholder="Name"
                     value={userInput.name}
                     onChange={inputOnChange}
                     id="name"
                  />
               </FormControl>
               <FormControl mt={4}>
                  <FormLabel>Type</FormLabel>
                  <Select
                     placeholder="Type"
                     value={userInput.type}
                     onChange={inputOnChange}
                     id="type"
                  >
                     <option value="checking">Checking</option>
                     <option value="savings">Savings</option>
                     <option value="credit">Credit</option>
                  </Select>
               </FormControl>
               <FormControl mt={4}>
                  <FormLabel>Balance</FormLabel>
                  <Input
                     placeholder="Balance"
                     value={userInput.balance}
                     onChange={inputOnChange}
                     id="balance"
                     type="number"
                  />
               </FormControl>
               <FormControl mt={4}>
                  <FormLabel>Low Balance Alert</FormLabel>
                  <Input
                     placeholder="Low Balance Alert"
                     value={userInput.lowBalanceAlert}
                     onChange={inputOnChange}
                     id="lowBalanceAlert"
                     type="number"
                  />
               </FormControl>
            </ModalBody>
            <ModalFooter>
               <Button colorScheme="green" mr={3}>
                  Create Account
               </Button>
               <Button colorScheme="red" onClick={onClose}>
                  Cancel
               </Button>
            </ModalFooter>
         </ModalContent>
      </Modal>
   );
};

export default CreateBankAccount;
