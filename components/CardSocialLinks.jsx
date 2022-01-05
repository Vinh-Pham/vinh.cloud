import {
  Box,
  Button,
  Stack,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import * as React from 'react'
import { FaFacebook, FaLinkedinIn, FaTwitter, FaEnvelope } from 'react-icons/fa'

export const CardWithSocialLinks = ({ facebook, twitter, linkedin }) => {
  return (
    <Box as="section" pt={10} position="relative">
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
              Social Media
            </Text>
          </Box>

          <Stack
            direction={{
              base: 'column',
              md: 'row',
            }}
            mb="4"
          >
            <Button
              as="a"
              href={`https://www.facebook.com/${facebook}`}
              variant="outline"
              flex={{
                md: '1',
              }}
              leftIcon={<Box as={FaFacebook} color={mode('blue.500', 'blue.200')} />}
            >
              Facebook
            </Button>
            <Button
              as="a"
              href={`https://twitter.com/${twitter}`}
              variant="outline"
              flex={{
                md: '1',
              }}
              leftIcon={<Box as={FaTwitter} color={mode('blue.500', 'blue.200')} />}
            >
              Twitter
            </Button>
            <Button
              as="a"
              href={`https://www.linkedin.com/in/${linkedin}`}
              variant="outline"
              flex={{
                md: '1',
              }}
              leftIcon={<Box as={FaLinkedinIn} color={mode('blue.500', 'blue.200')} />}
            >
              LinkedIn
            </Button>
          </Stack>
        </Box>
      </Box>
    </Box>
  )
}

export default CardWithSocialLinks
