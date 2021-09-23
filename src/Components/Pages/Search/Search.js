import { useState } from 'react';
import { RequestOptions } from '../../../utils/index';
import { Button } from '../../Button/Button';
import styled from 'styled-components';
import axios from 'axios';
<<<<<<< HEAD

const ContainerStyles = styled.div`
	height: 10vh;
	width: 100%;
	margin-top: 10px;
`;

const FormStyles = styled.div`
	display: flex;
	justify-content: center;
`;
=======
>>>>>>> dev

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
	const { Search } = RequestOptions;

	const mapResults = ({ results }) => {
		const mapper = results?.map(result => (
			<div key={result?.id}>
				<img src={result?.images.large} alt='anime' />
				<h1>{result?.titles.english}</h1>
				<h2>{result?.titles.japanese}</h2>
				<p>{result?.generalInfo.startDate}</p>
			</div>
		));
		return mapper;
	};

	const onSubmitOne = async e => {
		e.preventDefault();
		const searchResults = await Search({ input }, 'anime', 20);
		setAnime({ searchResults });
		const onSubmitTwo = async e => {
			e.preventDefault();
			axios
				.get(`https://kitsu.io/api/edge/anime?filter[text]=${input}`)
				.then(res => setAnime(res.data.data))
				.catch(err => console.log(err));
		};
		return { searchResults };
	};

<<<<<<< HEAD
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
				<Button
					onClick={onSubmitOne}
					type='submit'
					bgColor='green'
					color='white'
				>
					search
				</Button>
			</FormStyles>
		</ContainerStyles>
=======
	// const animeSearch = document.querySelector('#text').value;
	// axios
	// 	.get(`https://kitsu.io/api/edge/anime?filter[text]=${input}`)
	// 	.then(res => setAnime(res.data.data))
	// 	.catch(err => console.log(err));

	return (
		<>
			<InputStyles
				id='text'
				type='text'
				onChange={e => setInput(e.target.value)}
				placeholder='search anime'
				name='search'
			/>
			<Button onClick={onSubmitOne} type='submit' bgColor='green' color='white'>
				search
			</Button>
		</>
>>>>>>> dev
	);
};

export default Search;

{
	/* {mapResults({ anime })} */
}
