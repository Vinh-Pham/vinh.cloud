import { HStack, Icon, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'
import { HiMail, HiLocationMarker } from 'react-icons/hi'
import { FaGithub, FaBirthdayCake } from 'react-icons/fa'

export const UserInfo = (props) => {
  const { location, email, memberSince, github, ...stackProps } = props
  return (
    <Stack
      direction={{
        base: 'column',
        sm: 'row',
      }}
      spacing={{
        base: '1',
        sm: '6',
      }}
      mt="4"
      fontSize="sm"
      fontWeight="medium"
      color={useColorModeValue('blue.600', 'blue.300')}
      {...stackProps}
    >
      <HStack>
        <Icon as={HiLocationMarker} />
        <Text as="a" href={`https://www.google.com/maps/search/${location}`}>{location}</Text>
      </HStack>
      <HStack>
        <Icon as={HiMail} />
        <Text as="a" href={`mailto:${email}`}>{email}</Text>
      </HStack>
      <HStack>
        <Icon as={FaGithub} />
        <Text as="a" href={`https://github.com/${github}`}>GitHub</Text>
      </HStack>
    </Stack>
  )
}
