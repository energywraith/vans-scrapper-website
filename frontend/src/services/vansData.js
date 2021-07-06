import axios from 'axios'
const baseUrl = '/api/getVansData'

export const getAll = async () => {
  const request = axios.get(baseUrl)
  const response = await request
  return response.data
}
