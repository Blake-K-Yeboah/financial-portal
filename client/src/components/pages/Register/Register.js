import { Box, Flex, Heading, Text } from "@chakra-ui/react";

const Register = () => {
   return (
      <Flex alignItems="center" justifyContent="center" h="100vh">
         <Box
            bg="white"
            w="27.5%"
            p={8}
            h="60%"
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
         </Box>
      </Flex>
   );
};

export default Register;
