import {
  Button,
  Flex,
  Input,
  Container,
  Heading,
  List,
  ListItem,
} from '@chakra-ui/react'
import useChat from '../../hooks/useChat'
import io from 'socket.io-client'
import { useState, useRef, useEffect, useCallback } from 'react'

const socket = io.connect('http://localhost:8002')

const Chats = () => {
  const [messages, setMessages] = useState([])

  const { onMessage, sendMessage } = useChat(socket)

  useEffect(() => {
    onMessage(message => {
      setMessages(messages => [...messages, message])
    })
  }, [onMessage])

  const handleSubmit = e => {
    e.preventDefault()

    const message = inputRef.current.value

    if (!message) return

    setMessages(messages => [...messages, message])
    sendMessage(message)

    e.target.reset()
  }

  const inputRef = useRef()

  return (
    <Flex h="100vh" alignItems="center">
      <Container>
        <Heading>Chat</Heading>
        <List display="flex" flexDirection="column" gap={4} mt={10}>
          {messages.map((message, i) => {
            return (
              <ListItem p={4} bgColor="teal.50" borderRadius={6} key={i}>
                {message}
              </ListItem>
            )
          })}
        </List>
        <form onSubmit={handleSubmit} style={{ marginTop: 20 }}>
          <Flex gap={4}>
            <Input placeholder="Entrez votre message" ref={inputRef} />
            <Button flexShrink={0} colorScheme="teal" type="submit">
              Send Message
            </Button>
          </Flex>
        </form>
      </Container>
    </Flex>
  )
}

export default Chats
