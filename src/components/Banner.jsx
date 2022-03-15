import React from 'react'
import { Box, Center, Flex, Image } from '@chakra-ui/react'

function Banner() {
  return (
    <header>
        <Box display="Flex" alignItems="center" justifyContent='space-between' ml={6} mr={6}>
          <Box><Image boxSize="90px" src="brandlog" /></Box>  
          <Box></Box>  
        </Box>
    </header>
  )
}

export default Banner