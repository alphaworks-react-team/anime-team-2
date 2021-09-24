import axios from 'axios'
import { animeModel, categoriesModel } from '../index'

const AxiosRequest = (queryString, callback) => {
  axios
    .get(queryString)
    .then(response => {
      const { data } = response.data
      console.log('Anime Data:', data)

      const AnimeData = animeModel(data)
      console.log('Modeled Anime Data:', data)
      callback(AnimeData)
    })
    .catch(error => {
      console.log({ error })
    })
}
const CategoryAxiosRequest = (queryString, callback) => {
  axios
    .get(queryString)
    .then(response => {
      const { data } = response.data
      console.log('Category Data:', data)

      const CategoryData = categoriesModel(data)
      console.log('Modeled Category Data:', data)

      callback(CategoryData)
    })
    .catch(error => {
      console.log({ error })
    })
}

const RequestOptions = {
  BaseURL: 'https://kitsu.io/api/edge',
  Categories: async (limit, callback) => {
    const queryString = `${RequestOptions.BaseURL}/categories?&page[limit]=${
      limit || 10
    }&sort=title`
    CategoryAxiosRequest(queryString, data => callback(data))
  },
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
