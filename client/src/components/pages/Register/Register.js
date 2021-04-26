import { Box, Flex, Heading, Text } from "@chakra-ui/react";

// Helmet to access head and change title
import Helmet from "react-helmet";

// Components
import ErrorAlert from "../../alerts/ErrorAlert";
import RegisterForm from "./RegisterForm";

// useSelector
import { useSelector } from "react-redux";

const Register = () => {
   const errors = useSelector((state) => state.auth.errors);

   return (
      <>
         <Helmet>
            <title>Financial Portal - Register</title>
         </Helmet>
         <Flex alignItems="center" justifyContent="center" h="100vh">
            <Box
               bg="white"
               w={["80%", "60%", "40%", "40%", "30%"]}
               p={8}
               minH="60%"
               borderRadius={8}
               textAlign="center"
               boxShadow="sm"
            >
               <Heading as="h1" size="lg">
                  Register
               </Heading>
               <Text fontSize="md" pt={5} color="gray.800">
                  Fill out the following form to register
               </Text>
               {errors ? <ErrorAlert errors={errors} /> : ""}
               <RegisterForm />
            </Box>
         </Flex>
      </>
   );
};

export default Register;
