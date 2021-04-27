import {
   Box,
   Flex,
   Heading,
   Text,
   Link,
   useDisclosure,
} from "@chakra-ui/react";

// Helmet to access head and change title
import Helmet from "react-helmet";

// Components
import ErrorAlert from "../../alerts/ErrorAlert";
import LoginForm from "./LoginForm";

// useSelector and useDispatch
import { useSelector, useDispatch } from "react-redux";

// Nav Link
import { NavLink } from "react-router-dom";

// Set Error Action
import { setErrors } from "../../../slicers/authSlice";
import { useEffect } from "react";

const Login = () => {
   const errors = useSelector((state) => state.auth.errors);
   const dispatch = useDispatch();

   const { isOpen, onToggle } = useDisclosure();

   useEffect(() => {
      if (errors && !isOpen) {
         onToggle();
      }
   }, [errors, onToggle, isOpen]);

   const closeError = () => {
      onToggle();
      dispatch(setErrors(null));
   };

   return (
      <>
         <Helmet>
            <title>Financial Portal - Login</title>
         </Helmet>
         <Flex alignItems="center" justifyContent="center" h="100vh">
            <Box
               bg="white"
               w={["80%", "60%", "40%", "40%", "30%"]}
               p={8}
               minH="50%"
               borderRadius={8}
               textAlign="center"
               boxShadow="sm"
            >
               <Heading as="h1" size="lg">
                  Login
               </Heading>
               <Text fontSize="md" pt={5} color="gray.800">
                  Fill out the following form to login
               </Text>
               <ErrorAlert
                  errors={errors}
                  isOpen={isOpen}
                  closeHandler={closeError}
               />
               <LoginForm />
               <Link
                  as={NavLink}
                  to="/register"
                  color="green.400"
                  fontSize="sm"
               >
                  Don't have an account?
               </Link>
            </Box>
         </Flex>
      </>
   );
};

export default Login;
