import * as React from 'react'
import { Divider, VStack } from '@chakra-ui/react'
import Image from 'next/image'

const Resume = () => {
  return (
    <VStack>
      <Image src="/resume-1.jpg" width={1200} height={1500} />
      <Divider />
      <Image src="/resume-2.jpg" width={1200} height={1500} />
    </VStack>
  )
}

export default Resume
