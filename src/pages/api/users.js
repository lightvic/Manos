import { fetchPhpApi } from '../../lib/api'

const handler = async (req, res) => {
  const data = await fetchPhpApi('/users')

  return res.json(data)
}

export default handler
