import { Container, Grid, GridItem } from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import Navbar from "../../layout/Navbar";

const Home = () => {
   return (
      <>
         <Helmet>
            <title>Financial Portal - Home</title>
         </Helmet>
         <>
            <Navbar />
            <Container maxW="container.xl" h="75vh" mt={16}>
               <Grid
                  h="100%"
                  templateRows="repeat(4, 1fr)"
                  templateColumns="repeat(8, 1fr)"
                  gap={4}
               >
                  <GridItem rowSpan={4} colSpan={2} bg="green.400" />
                  <GridItem colSpan={2} bg="green.100" />
                  <GridItem colSpan={2} bg="green.100" />
                  <GridItem colSpan={2} bg="green.100" />
                  <GridItem colSpan={6} rowSpan={3} bg="green.300" />
               </Grid>
            </Container>
         </>
      </>
   );
};

export default Home;
