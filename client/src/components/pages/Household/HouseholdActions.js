// Chakra Ui Components
import { Box, Heading, Flex } from "@chakra-ui/react";

// Redux Hooks
import { useSelector } from "react-redux";

// Components
import DeleteHouseholdDialog from "./DeleteHouseholdDialog";
import InviteUserModal from "./InviteUserModal";

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
                  <InviteUserModal />
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
