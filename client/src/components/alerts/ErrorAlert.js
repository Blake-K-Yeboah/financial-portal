import {
   Alert,
   AlertDescription,
   AlertIcon,
   AlertTitle,
   UnorderedList,
   ListItem,
   Box,
   CloseButton,
   Fade,
} from "@chakra-ui/react";

const ErrorAlert = ({ errors, isOpen, closeHandler }) => {
   return (
      <Fade in={isOpen}>
         {!errors ? (
            ""
         ) : (
            <Alert status="error" textAlign="left" mt={7}>
               <AlertIcon />
               <Box pl={3}>
                  <AlertTitle>Errors with your submission!</AlertTitle>
                  <AlertDescription display="block" mt={3}>
                     <UnorderedList>
                        {errors
                           ? errors.map((error) => {
                                return (
                                   <ListItem fontSize="sm" key={error}>
                                      {error}
                                   </ListItem>
                                );
                             })
                           : ""}
                     </UnorderedList>
                  </AlertDescription>
                  <CloseButton
                     position="absolute"
                     right="8px"
                     top="8px"
                     onClick={closeHandler}
                  />
               </Box>
            </Alert>
         )}
      </Fade>
   );
};

export default ErrorAlert;
