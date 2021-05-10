// Chakra UI Components
import {
   Box,
   Flex,
   Heading,
   LinkBox,
   LinkOverlay,
   SimpleGrid,
} from "@chakra-ui/layout";

// Icons
import { ViewIcon, ArrowForwardIcon } from "@chakra-ui/icons";

// NavLink from react router dom
import { NavLink } from "react-router-dom";

// useSelector hook to access state
import { useSelector } from "react-redux";

const ThingsToDoSection = () => {
   const userRole = useSelector((state) => state.auth.user.role);

   const hasHousehold = userRole !== "personal";

   const linkBoxProps = {
      as: "div",
      w: "100%",
      minH: "100px",
      borderRadius: 6,
      sx: { _hover: { background: "gray.50" } },
      transition: "background .3s ease-in-out",
      boxShadow: "base",
   };

   return (
      <Box w="100%" h="100%" bg="white" boxShadow="sm" p={8} borderRadius={8}>
         <Heading as="h3" size="md" color="gray.600">
            Things To Do
         </Heading>
         <SimpleGrid columns={2} spacing={8} mt={8}>
            <LinkBox {...linkBoxProps}>
               <Flex alignItems="center" justifyContent="center" h="100%">
                  <ViewIcon color="green.400" w={5} height={5} mr={5} />
                  <Heading as="h5" size="md" color="green.400">
                     <LinkOverlay as={NavLink} to="/bank-accounts">
                        View Bank Accounts
                     </LinkOverlay>
                  </Heading>
               </Flex>
            </LinkBox>
            <LinkBox {...linkBoxProps}>
               <Flex alignItems="center" justifyContent="center" h="100%">
                  <ArrowForwardIcon color="green.400" w={5} height={5} mr={5} />
                  <Heading as="h5" size="md" color="green.400">
                     <LinkOverlay
                        as={NavLink}
                        to={hasHousehold ? "/household" : "/household/join"}
                     >
                        {hasHousehold ? "View" : "Join"} Household
                     </LinkOverlay>
                  </Heading>
               </Flex>
            </LinkBox>
         </SimpleGrid>
      </Box>
   );
};

export default ThingsToDoSection;
