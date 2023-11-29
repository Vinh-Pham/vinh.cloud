import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
  useColorModeValue,
  VStack,
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
import Link from 'next/link'
import Image from 'next/image'
import { CardContent } from '../components/CardContent'
import CardWithSocialLinks from '../components/CardSocialLinks'
import { CardWithAvatar } from '../components/CardWithAvatar'
import { UserInfo } from '../components/UserInfo'
import { CardInfo } from '../components/CardInfo'
import ContactForm from '../components/ContactForm'

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
          <Brand src="/svgs/laravel.svg" brand="Laravel" />
          <Brand src="/svgs/typescript.svg" brand="TypeScript" />
          <Brand src="/svgs/react.svg" brand="React" />
          <Brand src="/svgs/vue.svg" brand="Vue" />
          <Brand src="/svgs/gatsby_logo.svg" brand="Gatsby" />
          <Brand src="/svgs/Postgresql_elephant.svg" brand="PostgreSQL" />
          <Brand src="/svgs/graphql.svg" brand="Graphql" />
        </Grid>
      </CardInfo>
      <CardInfo cardTitle="Software">
        <Grid templateColumns="repeat(4, 1fr)" gap={4}>
          <Brand src="/svgs/vscode.svg" brand="VSCode" />
          <Brand src="/svgs/phpstorm.svg" brand="PHPStorm" />
          <Brand src="/svgs/tableplus.png" brand="TablePlus" />
          <Brand src="/svgs/git-icon.svg" brand="Git" />
          <Brand src="/svgs/postman.svg" brand="Postman" />
          <Brand src="/svgs/figma.svg" brand="Figma" />
          <Brand src="/svgs/notion.svg" brand="Notion" />
        </Grid>
      </CardInfo>
      <CardInfo cardTitle="My Work">
        <Box as="a" href="https://elvee.studio">
          <Image src="/work-1.png" width={1920} height={1000} />
          <Heading align="center" size="md" mt={4}>Elvee Studio</Heading>
        </Box>
      </CardInfo>
      <CardInfo cardTitle="Resume">
        <Flex flexDirection={{ base: 'column', md: 'row' }}>
          <Button as="a" leftIcon={<HiDownload />} colorScheme="blue" target="_blank" href="https://vinh.cloud/resume.pdf">Download PDF</Button>
          {
            isLargerThan900 ? (
              <Button ml={4} leftIcon={<HiEye />} onClick={onOpen} colorScheme="blue">View Resume</Button>
            ) : (
              <Link href="/resume" passhref>
                <a target="_blank" rel="noreferrer">
                  <Button href="/resume" ml={{ base: 0, md: 4 }} mt={{ base: 4, md: 0 }} isFullWidth leftIcon={<HiEye />} colorScheme="blue">View Resume</Button>
                </a>
              </Link>
            )
          }
        </Flex>
      </CardInfo>
      <ContactForm />
    </Box>
  )
}

export default Index
