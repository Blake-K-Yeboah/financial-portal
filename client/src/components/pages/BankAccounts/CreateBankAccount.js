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

// useState Hook
import { useState } from "react";

// Components
import ErrorAlert from "../../alerts/ErrorAlert";

// Import Axios
import axios from "axios";

// Redux hooks
import { useDispatch, useSelector } from "react-redux";

// Redux Actions
import { addBankAccount } from "../../../slicers/bankAccountsSlice";
import { setUser } from "../../../slicers/authSlice";

// UseHistory hook to redirect user
import { useHistory } from "react-router-dom";

const CreateBankAccount = ({ modalIsOpen, modalOnClose }) => {
   // Loading state from form submission
   const [isLoading, setIsLoading] = useState(false);

   const [userInput, setUserInput] = useState({
      name: "",
      type: "",
      balance: 0,
      lowBalanceAlert: 0,
   });

   const inputOnChange = (e) => {
      setUserInput({ ...userInput, [e.target.id]: e.target.value });
   };

   const [errors, setErrors] = useState(null);

   const dispatch = useDispatch();

   const closeError = () => {
      setErrors(null);
   };

   const token = useSelector((state) => state.auth.token);

   let history = useHistory();

   const createBankAccountHandler = () => {
      setIsLoading(true);

      axios
         .post("/api/bankaccounts/create", userInput, {
            headers: {
               Authorization: `Bearer ${token}`,
            },
         })
         .then((res) => {
            setIsLoading(false);
            dispatch(addBankAccount(res.data));
            alert("Bank Account Created");
         })
         .catch((err) => {
            if (err.response.status !== 401) {
               setIsLoading(false);
               setErrors(Object.values(err.response.data.errors));
            } else {
               alert("Session expired. Please login again");
               localStorage.removeItem("token");
               dispatch(setUser(null));
               history.push("/login");
            }
         });
   };

   return (
      <Modal isOpen={modalIsOpen} onClose={modalOnClose} isCentered size="lg">
         <ModalOverlay />
         <ModalContent>
            <ModalHeader>Create Bank Account</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
               <ErrorAlert errors={errors} closeHandler={closeError} />
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
               <Button
                  colorScheme="green"
                  mr={3}
                  isLoading={isLoading}
                  loadingText="Creating Account"
                  onClick={createBankAccountHandler}
               >
                  Create Account
               </Button>
               <Button colorScheme="red" onClick={modalOnClose}>
                  Cancel
               </Button>
            </ModalFooter>
         </ModalContent>
      </Modal>
   );
};

export default CreateBankAccount;
