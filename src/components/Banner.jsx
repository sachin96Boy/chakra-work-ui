import React from 'react';
import {
  Badge,
  Box,
  Button,
  Container,
  Grid,
  Heading,
  Image,
} from '@chakra-ui/react';
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

      {/* Bills */}
      <Container maxW="container.xl">
        <Box
          display="flex"
          flexDirection="row"
          flexWrap="wrap"
          justifyContent="space-between"
        >
          {/* add list of badges */}
          <Badge
            borderRadius="3xl"
            px={4}
            py={2}
            mx="4"
            mb="4"
            textTransform="initial"
            color="#ffffff"
            bg="blue.100"
          >
            Boost your career
          </Badge>
          <Badge
            borderRadius="3xl"
            px={4}
            py={2}
            mx="4"
            mb="4"
            textTransform="initial"
            color="#ffffff"
            bg="blue.100"
          >
            Boost your career
          </Badge>
          <Badge
            borderRadius="3xl"
            px={4}
            py={2}
            mx="4"
            mb="4"
            textTransform="initial"
            color="#ffffff"
            bg="blue.100"
          >
            Boost your career
          </Badge>
          <Badge
            borderRadius="3xl"
            px={4}
            py={2}
            mx="4"
            mb="4"
            textTransform="initial"
            color="#ffffff"
            bg="blue.100"
          >
            Boost your career
          </Badge>
        </Box>
      </Container>
      {/* last header section */}
      <Container maxW="container.xl" mt="20">
        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
          <Box>
            <Heading as="h3" size="lg" mb="7"></Heading>
            <Box
              display="flex"
              alignItems="center"
              flexDirection="row"
              w="100%"
            >
              <Box flexBasis="50%" w="100%" mr="2">
                
              </Box>
            </Box>
          </Box>
        </Grid>
      </Container>
    </>
  );
}

export default Banner;
