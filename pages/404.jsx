import { Box, Button, Center, Text } from '@chakra-ui/react'

export default function ErrorPage() {
  return (
    <Box p={8}>
      <Center flexDirection="column">
        <Text>Page Not Found</Text>
        <Button as="a" mt={4} href="https://vinh.cloud">Return To Home Page</Button>
      </Center>
    </Box>
  )
}
