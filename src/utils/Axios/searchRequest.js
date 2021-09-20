import axios from 'axios'
import { dataTransformer } from '../index'

const searchRequest = async ({ input }, endpoint = 'anime', filterType = 'text') => {
  const baseURL = 'https://kitsu.io/api/edge'
  const queryString = `${baseURL}/${endpoint}?filter[${filterType}]=${input}`

  const request = await axios
    .get(queryString)
    .then(response => {
      const { data } = response.data
      console.log(data)

      const AnimeData = dataTransformer(data)
      console.log(AnimeData)
    })
    .catch(error => {
      console.log({ error })
    })

  return { request }
}

export default searchRequest
