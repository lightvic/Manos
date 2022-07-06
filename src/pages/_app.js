import '../styles/globals.css'

import { ChakraProvider } from '@chakra-ui/react'

const Manos = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || (page => page)

  return (
    <ChakraProvider>{getLayout(<Component {...pageProps} />)}</ChakraProvider>
  )
}

export default Manos
