import axios from 'axios'
import qs from 'qs'
// import
const AxiosInstance = axios.create({
  baseURL: 'https://kitsu.io/api/edge',
  timeout: 9000,
  headers: {
    Accept: 'application/vnd.api+json',
    'Content-Type': 'application/vnd.api+json',
  },
})

export const getSearch = async ({ input }, endpoint, method = 'GET') => {
  const config = {
    method: `${method}`,
    url: `/${endpoint}`,
    params: {
      filter: {
        text: input,
      },
    },
    paramsSerializer: params => {
      return qs.stringify({ params })
    },
  }
  const request = await AxiosInstance(config)
    .then(response => {
      console.log('Anime Data (Three):', response.data)
    })
    .catch(error => {
      console.log({ error })
    })

  return request
}
