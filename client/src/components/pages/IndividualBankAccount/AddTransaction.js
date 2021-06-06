// useState hook
import { useState } from "react";

// Chakra Ui Components
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
   InputGroup,
   InputLeftAddon,
   InputRightAddon,
} from "@chakra-ui/react";

const AddTransaction = ({ isOpen, onClose }) => {
   // Blank user input to be used when resetting input
   const blankInput = {
      amount: 0,
      type: "",
      memo: "",
   };

   // Control user input form
   const [userInput, setUserInput] = useState(blankInput);

   // Handle input change event to update state
   const inputOnChange = (e) => {
      setUserInput({ ...userInput, [e.target.id]: e.target.value });
   };

   return (
      <Modal isOpen={isOpen} onClose={onClose} isCentered size="lg">
         <ModalOverlay />
         <ModalContent>
            <ModalHeader>Add Transaction</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
               <FormControl mt={4}>
                  <FormLabel>Amount</FormLabel>
                  <InputGroup>
                     <InputLeftAddon children="$" />
                     <Input
                        placeholder="Amount"
                        value={userInput.amount}
                        id="amount"
                        onChange={inputOnChange}
                        type="number"
                     />
                     <InputRightAddon children=".00" />
                  </InputGroup>
               </FormControl>
               <FormControl mt={4}>
                  <FormLabel>Type</FormLabel>
                  <Select
                     placeholder="Type"
                     value={userInput.type}
                     onChange={inputOnChange}
                     id="type"
                  >
                     <option value="deposit">Deposit</option>
                     <option value="withdrawal">Withdrawal</option>
                     <option value="point of sale">Point of Sale</option>
                  </Select>
               </FormControl>
               <FormControl mt={4}>
                  <FormLabel>Memo</FormLabel>
                  <Input
                     placeholder="Memo"
                     value={userInput.memo}
                     onChange={inputOnChange}
                     id="memo"
                  />
               </FormControl>
            </ModalBody>
            <ModalFooter>
               <Button colorScheme="green" mr={3}>
                  Add Transaction
               </Button>
               <Button colorScheme="red" onClick={onClose}>
                  Cancel
               </Button>
            </ModalFooter>
         </ModalContent>
      </Modal>
   );
};

export default AddTransaction;
