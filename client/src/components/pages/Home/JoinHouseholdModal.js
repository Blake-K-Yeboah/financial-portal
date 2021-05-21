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
} from "@chakra-ui/react";

// useState Hook
import { useState } from "react";

const JoinHouseholdModal = ({ isOpen, onClose }) => {
   const [invitationalCode, setInvitationalCode] = useState("");

   const [isLoading, setIsLoading] = useState(false);

   return (
      <Modal isOpen={isOpen} onClose={onClose} isCentered size="lg">
         <ModalOverlay />
         <ModalContent>
            <ModalHeader>Join Household</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
               <FormControl mt={4}>
                  <FormLabel>Invitional Code</FormLabel>
                  <Input
                     placeholder="Invitation Code"
                     value={invitationalCode}
                     onChange={(e) => setInvitationalCode(e.target.value)}
                     id="name"
                  />
               </FormControl>
            </ModalBody>
            <ModalFooter>
               <Button
                  colorScheme="green"
                  mr={3}
                  isLoading={isLoading}
                  loadingText="Joining Household"
               >
                  Join Household
               </Button>
               <Button colorScheme="red" onClick={onClose}>
                  Cancel
               </Button>
            </ModalFooter>
         </ModalContent>
      </Modal>
   );
};

export default JoinHouseholdModal;
