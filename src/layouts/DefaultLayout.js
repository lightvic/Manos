import { Box } from "@chakra-ui/react"
import Header from "../components/shared/Header"

const DefaultLayout = ({ children }) => {
  return (
    <Box maxW="4xl" mx="auto">
      <Header />
      {children}
    </Box>
  )
}

export default DefaultLayout
