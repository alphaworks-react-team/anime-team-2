import axios from 'axios'
import { animeModel } from '../index'

const AxiosRequest = (queryString, callback) => {
  axios
    .get(queryString)
    .then(response => {
      const { data } = response.data
      console.log(data)

      const AnimeData = animeModel(data)

      callback(AnimeData)
    })
    .catch(error => {
      console.log({ error })
    })
}

const RequestOptions = {
  BaseURL: 'https://kitsu.io/api/edge',
  General: async (endpoint, limit = 10, callback) => {
    const queryString = `${RequestOptions.BaseURL}/${endpoint}&[limit]=${limit}`
    AxiosRequest(queryString, data => callback(data))
  },
  Search: async ({ input }, endpoint, limit = 10, callback) => {
    const queryString = `${RequestOptions.BaseURL}/${endpoint}?filter[text]=${input}&[limit]=${limit}`
    AxiosRequest(queryString, data => callback(data))
  },
  Trending: async (endpoint, limit, callback) => {
    const queryString = `${RequestOptions.BaseURL}/trending/${endpoint}?[limit]=${limit}`
    AxiosRequest(queryString, data => callback(data))
  },
}
export default RequestOptions
