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
  Filter: async (endpoint, filterBy, filterValue, limit, callback) => {
    const queryString = `${
      RequestOptions.BaseURL
    }/${endpoint}?filter[${filterBy}]=${filterValue}&page[limit]=${limit || 10}`
    AxiosRequest(queryString, data => callback(data))
  },
  General: async (endpoint, limit, callback) => {
    const queryString = `${RequestOptions.BaseURL}/${endpoint}&[limit]=${limit || 10}`
    AxiosRequest(queryString, data => callback(data))
  },
  Search: async ({ input }, endpoint, limit, callback) => {
    const queryString = `${
      RequestOptions.BaseURL
    }/${endpoint}?filter[text]=${input}&[limit]=${limit || 10}`
    AxiosRequest(queryString, data => callback(data))
  },
  Sort: async (endpoint, limit, callback) => {
    // const sortOrder = () => {
    //   return ascOrDesc === 'desc' ? '-' : ''
    // }
    const queryString = `${
      RequestOptions.BaseURL
    }/${endpoint}/?sort=-averageRating&[limit]=${limit || 10}`
    AxiosRequest(queryString, data => callback(data))
  },
  Trending: async (endpoint, limit, callback) => {
    const queryString = `${RequestOptions.BaseURL}/trending/${endpoint}?[limit]=${
      limit || 10
    }`
    AxiosRequest(queryString, data => callback(data))
  },
}
export default RequestOptions
