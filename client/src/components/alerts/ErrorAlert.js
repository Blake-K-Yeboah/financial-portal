import {
   Alert,
   AlertDescription,
   AlertIcon,
   AlertTitle,
   UnorderedList,
   ListItem,
   Box,
} from "@chakra-ui/react";

const ErrorAlert = ({ errors }) => {
   return (
      <Alert status="error" textAlign="left" mt={7}>
         <AlertIcon />
         <Box pl={3}>
            <AlertTitle>Errors with your submission!</AlertTitle>
            <AlertDescription display="block" mt={3}>
               <UnorderedList>
                  {errors.map((error) => {
                     return (
                        <ListItem fontSize="sm" key={error}>
                           {error}
                        </ListItem>
                     );
                  })}
               </UnorderedList>
            </AlertDescription>
         </Box>
      </Alert>
   );
};

export default ErrorAlert;
