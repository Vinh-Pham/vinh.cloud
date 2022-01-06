import { IconContext } from 'react-icons'
import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layout'
import theme from '../theme'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" sizes="any" href="/favicon.ico" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </Head>
      <IconContext.Provider value={{ size: '1.5em', className: 'text-gray-bg' }}>
        <ChakraProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ChakraProvider>
      </IconContext.Provider>
    </>
  )
}
