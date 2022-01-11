import { Box, Button, Flex, Grid, GridItem, Heading, Text, useColorModeValue, VStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Divider,
  useDisclosure,
  useMediaQuery,
 } from '@chakra-ui/react'
import { HiDownload, HiEye } from 'react-icons/hi'
import * as React from 'react'
import Image from 'next/image'
import { CardContent } from '../components/CardContent'
import CardWithSocialLinks from '../components/CardSocialLinks'
import { CardWithAvatar } from '../components/CardWithAvatar'
import { UserInfo } from '../components/UserInfo'
import { CardInfo } from '../components/CardInfo'

const Brand = ({ src, brand }) => (
  <GridItem display="flex" justifyContent="center">
    <VStack>
      <Image src={src} width="50px" height="50px" />
      <Text fontSize="sm">{brand}</Text>
    </VStack>
  </GridItem>
)

const Index = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [isLargerThan900] = useMediaQuery('(min-width: 900px)')

  return (
    <Box as="section" pt="20" pb="12" position="relative">
      <Modal isOpen={isOpen} onClose={onClose} size="5xl" isCentered scrollBehavior="inside">
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody mx="auto">
            <Image src="/resume-1.jpg" width="800" height="1000" />
            <Divider />
            <Image src="/resume-2.jpg" width="800" height="1000" />
          </ModalBody>
        </ModalContent>
      </Modal>
      <Box position="absolute" inset="0" height="32" bg="blue.600" zIndex="1" />

      <CardWithAvatar
        maxW="xl"
        avatarProps={{
          size: '2xl',
          showBorder: false,
          src: '/logo.png',
          name: 'Vinh Pham',
        }}
      >
        <CardContent>
          <Heading size="lg" fontWeight="extrabold" letterSpacing="tight">
            Vinh Pham
          </Heading>
          <Text color={useColorModeValue('gray.600', 'gray.400')}>
            Full Stack Developer
          </Text>
          <UserInfo location="Houston, TX" email="vinh@vinh.cloud" github="Vinh-Pham" />
        </CardContent>
      </CardWithAvatar>

      <CardWithSocialLinks facebook="vinhsterrr" twitter="VinhTPham" linkedin="vinhthepham" />
      <CardInfo cardTitle="About Me">
        <Text>
          I am a Full-Stack Developer in Houston, TX. I build web applications in React or Vue and APIs using NestJS.
          During my free time, I like to learn about new web technologies and frameworks. Other than programming, I enjoy
          movie nights with my wife and traveling.
        </Text>
      </CardInfo>
      <CardInfo cardTitle="Tech Stack">
        <Grid templateColumns="repeat(4, 1fr)" gap={4}>
          <Brand src="/svgs/typescript.svg" brand="TypeScript" />
          <Brand src="/svgs/nodejs-black.svg" brand="NodeJS" />
          <Brand src="/svgs/react.svg" brand="React" />
          <Brand src="/svgs/vue.svg" brand="Vue" />
          <Brand src="/svgs/gatsby_logo.svg" brand="Gatsby" />
          <Brand src="/svgs/nest_logo.svg" brand="Nest" />
          <Brand src="/svgs/Postgresql_elephant.svg" brand="PostgreSQL" />
          <Brand src="/svgs/graphql.svg" brand="Graphql" />
        </Grid>
      </CardInfo>
      <CardInfo cardTitle="Software">
        <Grid templateColumns="repeat(4, 1fr)" gap={4}>
          <Brand src="/svgs/vscode.svg" brand="VSCode" />
          <Brand src="/svgs/webstorm.svg" brand="Webstorm" />
          <Brand src="/svgs/datagrip.svg" brand="DataGrip" />
          <Brand src="/svgs/git-icon.svg" brand="Git" />
          <Brand src="/svgs/postman.svg" brand="Postman" />
          <Brand src="/svgs/figma.svg" brand="Figma" />
        </Grid>
      </CardInfo>
      <CardInfo cardTitle="Resume">
        <Button as="a" leftIcon={<HiDownload />} colorScheme="blue" target="_blank" href="https://vinh.cloud/resume.pdf">Download</Button>
        {
          isLargerThan900 && (
            <Button ml={4} leftIcon={<HiEye />} onClick={onOpen} colorScheme="blue">View</Button>
          )
        }
      </CardInfo>
    </Box>
  )
}

export default Index
