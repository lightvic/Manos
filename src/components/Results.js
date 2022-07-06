import { Flex, Heading, Box } from "@chakra-ui/react"
import ProfileCard from "./shared/ProfileCard"

const Results = ({ search, data }) => {
  return (
    <Flex flexDirection="column" gap={5} mt={5}>
      <Heading size="sm">
        {data.length} {data.length > 1 ? "résultats" : "résultat"} pour {search}
      </Heading>
      <Flex
        justify="space-between"
        align="baseline"
        wrap="wrap"
        gap={5}
        className="profils"
      >
        {data.map((user, i) => (
          <Box key={i} w={{ base: "350px", lg: "420px" }}>
            <ProfileCard user={user} />
          </Box>
        ))}
      </Flex>
    </Flex>
  )
}

export default Results
