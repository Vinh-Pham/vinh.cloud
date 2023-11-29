import { Avatar, Box, Flex, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'

export const CardWithAvatar = (props) => {
  const { action, avatarProps, children, ...rest } = props
  return (
    <Flex
      zIndex={2}
      position="relative"
      direction="column"
      align={{
        sm: 'center',
      }}
      maxW="2xl"
      mx="auto"
      bg="white"
      shadow={{
        sm: 'base',
      }}
      rounded={{
        sm: 'lg',
      }}
      px={{
        base: '6',
        md: '8',
      }}
      pb={{
        base: '6',
        md: '8',
      }}
      {...rest}
    >
      <Avatar
        mt="-10"
        bg="white"
        p={2}
        {...avatarProps}
      />
      <Box
        position="absolute"
        top="4"
        insetEnd={{
          base: '6',
          md: '8',
        }}
      >
        {action}
      </Box>
      {children}
    </Flex>
  )
}
