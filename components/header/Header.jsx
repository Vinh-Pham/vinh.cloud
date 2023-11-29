import { Box, Center, Flex, HStack, SlideFade, useBoolean, useOutsideClick, useColorModeValue as mode } from '@chakra-ui/react'
import * as React from 'react'
import { Logo } from './Logo'
import { Navbar } from './Navbar'
import { NavLink } from './NavLink'

export const Header = () => {
  const [show, { toggle }] = useBoolean(false)
  const featuresRef = React.useRef()

  useOutsideClick({
    ref: featuresRef,
    handler: () => toggle(),
  })

  return (
    <Box bg={mode('gray.50', 'gray.700')}>
      <Navbar>
        <Navbar.Brand>
          <Center marginEnd="10">
            <Logo h="6" iconColor={mode('blue.600', 'blue.300')} />
          </Center>
        </Navbar.Brand>
        <Navbar.Links>
          <NavLink isActive>Start</NavLink>
          <NavLink>Documentation</NavLink>
          <NavLink>Pricing</NavLink>
        </Navbar.Links>
      </Navbar>
    </Box>
  )
}
