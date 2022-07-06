import { Flex, Box } from "@chakra-ui/react"
import Image from "next/image"

const Category = ({ name, image }) => {
  return (
    <Flex
      flexDirection="column"
      border="solid"
      borderWidth={1}
      borderColor="gray.200"
      borderRadius={6}
      overflow="hidden"
    >
      <Box h={{ base: "100px", lg: "150px" }} position="relative">
        <Image
          src={image}
          layout="fill"
          objectFit="cover"
          alt={`Image de la catégorie ${name}`}
        />
      </Box>
      <Flex justifyContent="center" py={2} px={2}>
        {name}
      </Flex>
    </Flex>
  )
}

export default Category
