import { useRouter } from 'next/router'

const ChatsUserId = () => {
  const router = useRouter()

  const { chatId } = router.query

  return <p>{chatId}</p>
}

export default ChatsUserId
