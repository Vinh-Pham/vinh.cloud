import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Button,
  Flex,
  Input,
  VStack,
  FormControl,
  FormLabel,
  useToast,
  useBoolean,
 } from '@chakra-ui/react'
import * as React from 'react'
import { CardInfo } from './CardInfo'

const ContactForm = () => {
  const [contactForm, setContactForm] = React.useState({
    email: '',
    message: '',
  })
  const [formError, setFormError] = React.useState(null)
  const [loading, setLoading] = useBoolean()
  const toast = useToast()

  const onSubmit = async (e) => {
    e.preventDefault()
    setFormError(null)
    const { email, message } = contactForm

    // Quick Email Regex
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if (!email.match(emailRegex)) {
      setFormError('Email not valid')
      return
    }

    if (!message) {
      setFormError('Message is required')
      return
    }

    try {
      setLoading.on()
      await fetch('https://submit-form.com/1JD9qlO7', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(contactForm),
      })

      setContactForm({
        email: '',
        message: '',
      })

      toast({
        title: 'Success',
        description: 'Your form has been submitted.',
        status: 'success',
        position: 'top',
      })
    } catch {
      toast({
        title: 'Error',
        description: 'An error occurred, please try again later.',
        status: 'error',
        position: 'top',
      })
    } finally {
      setLoading.off()
    }
  }

  return (
    <CardInfo cardTitle="Contact Me">
      {
        formError && (
          <Alert status="error" mb={4} rounded="lg">
            <AlertIcon />
            <AlertTitle mr={2}>Error:</AlertTitle>
            <AlertDescription>{formError}</AlertDescription>
          </Alert>
        )
      }
      <form onSubmit={onSubmit}>
        <VStack spacing={4}>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input value={contactForm.email} onChange={e => setContactForm({ email: e.target.value, message: contactForm.message })} />
          </FormControl>
          <FormControl>
            <FormLabel>Message</FormLabel>
            <Input value={contactForm.message} onChange={e => setContactForm({ email: contactForm.email, message: e.target.value })} />
          </FormControl>
        </VStack>
        <Flex justify="center">
          <Button type="submit" isLoading={loading} mt={4} colorScheme="blue">Submit</Button>
        </Flex>
      </form>
    </CardInfo>
  )
}

export default ContactForm
