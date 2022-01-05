import { IconContext } from 'react-icons'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layout'
import theme from '../theme'

export default function MyApp({ Component, pageProps }) {
  return (
    <IconContext.Provider value={{ size: '1.5em', className: 'text-gray-bg' }}>
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </IconContext.Provider>
  )
}
