import axios from 'axios'
import { animeModel } from '../index'

// const baseURL = 'https://kitsu.io/api/edge'

const AxiosRequest = (queryString, cb) => {
  axios
    .get(queryString)
    .then(response => {
      const { data } = response.data
      console.log(data)

      const AnimeData = animeModel(data)

      cb(AnimeData)
    })
    .catch(error => {
      console.log({ error })
    })
}

const RequestOptions = {
  BaseURL: 'https://kitsu.io/api/edge',
  Search: async ({ input }, endpoint, filterType, pageLimit, cb) => {
    const queryString = `${RequestOptions.BaseURL}/${endpoint}?filter[${filterType}]=${input}`
    AxiosRequest(queryString, data => {
      cb(data)
    })
  },
  Trending: async (pageLimit, cb) => {
    const queryString = `${RequestOptions.BaseURL}/trending/anime?pageLimit=${pageLimit}`
    AxiosRequest(queryString, data => cb(data))
  },
}
export default RequestOptions
