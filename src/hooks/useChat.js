import { useCallback } from 'react'

const useChat = socket => {
  const onMessage = useCallback(
    cb => {
      socket.on('message', message => {
        cb(message)
      })
    },
    [socket],
  )

  const sendMessage = message => {
    socket.emit('message', message)
  }

  return { onMessage, sendMessage }
}

export default useChat
