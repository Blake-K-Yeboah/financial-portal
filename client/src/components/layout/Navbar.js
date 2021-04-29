import { Box, Button, chakra, Container, Heading } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { setUser } from "../../slicers/authSlice";

const Navbar = () => {
   const dispatch = useDispatch();

   const history = useHistory();

   const logoutHandler = () => {
      localStorage.removeItem("token");
      dispatch(setUser(null));
      history.push("/login");
   };

   return (
      <Box w="100vw" h="80px" bgColor="white" boxShadow="sm">
         <Container
            maxW="container.xl"
            h="100%"
            d="flex"
            alignItems="center"
            justifyContent="space-between"
         >
            <Heading as="h2" size="lg">
               Financial <chakra.span color="green.400">Portal</chakra.span>
            </Heading>
            <Button colorScheme="red" variant="outline" onClick={logoutHandler}>
               Logout
            </Button>
         </Container>
      </Box>
   );
};

export default Navbar;
