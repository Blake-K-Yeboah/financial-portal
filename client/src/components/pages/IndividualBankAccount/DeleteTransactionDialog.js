// Chakra UI Components
import {
   AlertDialog,
   AlertDialogBody,
   AlertDialogFooter,
   AlertDialogHeader,
   AlertDialogContent,
   AlertDialogOverlay,
   Button,
} from "@chakra-ui/react";

const DeleteTransactionDialog = ({ isOpen, onClose, transaction }) => {
   return (
      <AlertDialog isOpen={isOpen} onClose={onClose}>
         <AlertDialogOverlay>
            <AlertDialogContent>
               <AlertDialogHeader fontSize="lg" fontWeight="bold">
                  Delete Transaction
               </AlertDialogHeader>

               <AlertDialogBody>
                  Are you sure? You can't undo this action afterwards.
               </AlertDialogBody>

               <AlertDialogFooter>
                  <Button onClick={onClose}>Cancel</Button>
                  <Button colorScheme="red" ml={3}>
                     Delete
                  </Button>
               </AlertDialogFooter>
            </AlertDialogContent>
         </AlertDialogOverlay>
      </AlertDialog>
   );
};

export default DeleteTransactionDialog;
