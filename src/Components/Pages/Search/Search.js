import { useState } from 'react';
import { getSearch } from '../../../utils/axiosRequest';
import { Button } from '../../Button/Button';
import styled from 'styled-components';
import axios from 'axios';

const ContainerStyles = styled.div`
	height: 10vh;
	width: 100%;
	margin-top: 10px;
`;
const FormStyles = styled.div`
	display: flex;
	justify-content: center;
`;
const InputStyles = styled.input`
	padding: 10px;
	background-color: #f4f4f4;
	border: none;
	outline: none;
	width: 70%;
	align-self: center;
`;

const Search = props => {
	const [anime, setAnime] = useState([]);
	const [input, setInput] = useState('');

	const mapSearchResults = ({ anime }) => {
		const mapper = anime.map(anime => (
			<div key={anime.id}>
				<img src={anime.posterImage.large} alt='anime' />
				<h1>{anime.title}</h1>
				<p>{anime.Year}</p>
			</div>
		));
		return mapper;
	};

	const onSubmit = async e => {
		e.preventDefault();
		axios
			.get(`https://kitsu.io/api/edge/anime?filter[text]=${input}`)
			.then(res => setAnime(res.data.data))
			.catch(err => console.log(err));
	};

	return (
		<ContainerStyles>
			<FormStyles>
				<InputStyles
					id='text'
					type='text'
					onChange={e => setInput(e.target.value)}
					placeholder='search anime'
					name='search'
				/>
				<Button onClick={onSubmit} type='submit' bgColor='green' color='white'>
					search
				</Button>
			</FormStyles>
			<div>
				<h1>hello</h1>

				{anime.map(anime => (
					<div key={anime.id}>
						<h1>{anime.attributes.titles.en}</h1>
						<img src={anime.attributes.posterImage.large} alt='anime' />
					</div>
				))}
			</div>
		</ContainerStyles>
	);
};

export default Search;
