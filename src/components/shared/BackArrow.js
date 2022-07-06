import React from "react"
import { ArrowBackIcon } from "@chakra-ui/icons"
import { Heading, Flex, Box } from "@chakra-ui/react"
import { useRouter } from "next/router"
import useMediaQuery from "@mui/material/useMediaQuery"
import { useTheme } from "@mui/material/styles"

const BackArrow = () => {
  const theme = useTheme()
  const isMatches = useMediaQuery(theme.breakpoints.up("lg"))
  const router = useRouter()
  return (
    <button onClick={() => router.back()}>
      <Flex alignItems="center" ml={isMatches ? 0 : 4} mb={5}>
        <ArrowBackIcon color="teal" boxSize={4} mr={0.5} />
        <Heading size="sm" fontSize={{ base: "14px", lg: "18px" }} color="teal">
          Retour
        </Heading>
      </Flex>
    </button>
  )
}

export default BackArrow
