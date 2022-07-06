import axios from 'axios'

export const fetchPhpApi = async route => {
  const res = await axios.get(
    process.env.NEXT_PUBLIC_PHP_API_URL + route + '.php',
  )

  return res.data
}

export const fetchApi = async route => {
  const res = await axios.get(process.env.NEXT_PUBLIC_API_URL + route)

  return res.data
}
