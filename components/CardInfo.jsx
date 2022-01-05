import {
  Box,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import * as React from 'react'

export const CardInfo = ({ cardTitle, children }) => {
  return (
    <Box as="section" mt={10} position="relative">
      <Box
        maxW={{
          base: 'xl',
          md: '7xl',
        }}
        mx="auto"
        px={{
          md: '8',
        }}
      >
        <Box
          maxW="xl"
          mx="auto"
          py="6"
          px="8"
          rounded={{
            md: 'lg',
          }}
          bg="white"
          shadow="base"
        >
          <Box mb="5">
            <Text as="h3" fontWeight="bold" fontSize="lg">
              {cardTitle}
            </Text>
          </Box>
          {children}
        </Box>
      </Box>
    </Box>
  )
}

export default CardInfo
