import React from 'react';
import { Box, Button, Container, Grid, Heading, Image } from '@chakra-ui/react';
import brandLogo from '../assets/brand-logo.svg';
import illustration from '../assets/illustration.svg';
import imageone from '../assets/image-one.jpg';
import imagetwo from '../assets/image-two.jpg';
import imagethree from '../assets/image-three.jpg';
import rightArrow from '../assets/right-arrow.svg';

function Banner() {
  return (
    <>
      <header>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          ml={6}
          mr={6}
        >
          <Box>
            <Image boxSize="90px" src={brandLogo} alt="brand" />
          </Box>
          <Box>
            <Button pr={3} colorScheme="gray.600" fontSize="sm" variant="link">
              log in
            </Button>
            <Button colorScheme="gray.600" fontSize="sm" variant="link">
              sign up
            </Button>
          </Box>
        </Box>
      </header>
      {/*main-punch-line*/}
      <Box>
        <Container maxWidth="container.xl">
          <Box display="flex" alignItems="center" py={20} flexDirection="row">
            <Box>
              <Heading as="h1" size="2xl">
                <Box fontWeight="black">
                  Dive in - There are so many things to do in Meetups
                </Box>
              </Heading>
              <Box mt="6" fontWeight="medium">
                Join the group to meet people, mak friends, find suppoort, grow
                a business, and explore your interests. thousands of events are
                happ
              </Box>
            </Box>
            <Box>
              <Image w="100% " src={illustration} alt="illustration" />
            </Box>
          </Box>
        </Container>
      </Box>
      {/* three boxes */}
      <Container maxW="container.xl" mt={10}>
        <Grid templateColumns="repeat(3, 1fr)" gap={3}>
          <Box>
            Exolore the outdoors
            <Image w="100%" borderRadius="lg" src={imageone} alt="imageone" />
            <Button colorScheme="teal" variant="link" mt="5">
              Exolore the outdoors
              <Image w="100%" ml="2" src={rightArrow} alt="rightArrow" />
            </Button>
          </Box>
          <Box>
            Exolore the outdoors
            <Image w="100%" borderRadius="lg" src={imagetwo} alt="imagetwo" />
            <Button colorScheme="teal" variant="link" mt="5">
              Exolore the outdoors
              <Image w="100%" ml="2" src={rightArrow} alt="rightArrow" />
            </Button>
          </Box>
          <Box>
            Exolore the outdoors
            <Image
              w="100%"
              borderRadius="lg"
              src={imagethree}
              alt="imagethree"
            />
            <Button colorScheme="teal" variant="link" mt="5">
              Exolore the outdoors
              <Image w="100%" ml="2" src={rightArrow} alt="rightArrow" />
            </Button>
          </Box>
        </Grid>
      </Container>
    </>
  );
}

export default Banner;
