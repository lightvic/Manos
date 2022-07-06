import { Tag } from '@chakra-ui/react'

const Filter = ({ children, onClick }) => {
  return (
    <Tag
      py={2}
      px={3}
      bgColor="whiteAlpha.100"
      border="solid"
      borderWidth={1}
      borderColor="gray.200"
      cursor="pointer"
      _hover={{ bgColor: 'gray.100' }}
      onClick={onClick}>
      {children}
    </Tag>
  )
}

export default Filter
