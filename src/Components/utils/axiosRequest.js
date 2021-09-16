import axios from 'axios';

const AxiosInstance = axios.create({
	baseURL: 'https://kitsu.io/api/edge',
	timeout: 9000,
	headers: {
		Accept: 'application/vnd.api+json',
		'Content-Type': 'application/vnd.api+json',
	},
});
const searchConfig = {
	url: '/anime',
	params: {
		filter: '[text]',
		value: 'cowboy bebop',
	},
};

const kitsuBaseURL = 'https://kitsu.io/api/edge';

export const getAnimeOne = () => {
	return axios
		.get(`${kitsuBaseURL}/anime?filter[text]`)
		.then(response => {
			console.log('Anime Data:', response.data);
			return response.json(response.data);
		})
		.catch(error => {
			console.log({ error });
		});
};

export const getAnimeTwo = () => {
	return AxiosInstance.get('/anime?filter[text]=cowboy%20bebop')
		.then(response => {
			console.log('Anime Data:', response.data);
			return response.json(response.data);
		})
		.catch(error => {
			console.log({ error });
		});
};

export const getAnimeThree = () => {
	return AxiosInstance.get(searchConfig)
		.then(response => {
			console.log('Anime Data:', response.data);
			return response.json(response.data);
		})
		.catch(error => {
			console.log({ error });
		});
};
