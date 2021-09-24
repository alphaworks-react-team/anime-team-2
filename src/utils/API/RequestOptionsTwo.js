import axios from 'axios'
import qs from 'qs'
import { animeModel } from '../index'
const RequestOptionsTwo = {
  AxiosInstance: axios.create({
    baseURL: 'https://kitsu.io/api/edge',
    timeout: 9000,
  }),
  ConfigOptions: (endpoint, requestOptions, limit, callback) => {
    const requestConfig = {
      url: endpoint,
      params: {
        requestOptions,
        limit: limit || 10,
      },
      paramSeralizer: params => {
        return qs.stringify(params, { arrayFormat: 'brackets' })
      },
      method: 'GET',
      transformResponse: response => {
        const { data } = response.data

        const AnimeData = animeModel(data)

        callback(AnimeData)
      },
    }

    return requestConfig
  },
  AxiosRequest: async requestConfig => {
    await RequestOptionsTwo.AxiosInstance({ requestConfig }).catch(error => {
      console.log({ error })
    })
  },
}
export default RequestOptionsTwo
