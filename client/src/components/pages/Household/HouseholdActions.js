// Chakra Ui Components
import { Box, Button, Heading, Flex } from "@chakra-ui/react";

// Redux Hooks
import { useSelector } from "react-redux";

// Components
import DeleteHouseholdDialog from "./DeleteHouseholdDialog";

const HouseholdActions = () => {
   const userRole = useSelector((state) => state.auth.user.role);

   return (
      <Box
         w="100%"
         h="100%"
         bg="white"
         boxShadow="sm"
         px={8}
         py={6}
         borderRadius={8}
      >
         <Heading as="h3" size="md" color="gray.600" mb={4}>
            Househould Actions
         </Heading>
         <Flex>
            {userRole === "owner" ? (
               <>
                  <Button colorScheme="green">Invite User To Household</Button>
                  <DeleteHouseholdDialog />
               </>
            ) : (
               ""
            )}
         </Flex>
      </Box>
   );
};

export default HouseholdActions;
