import React, { useEffect } from 'react';
import './App.css';
import Search from './Components/Search/Search';
import { getSearch } from './utils/axiosRequest';

const App = () => {
	// useEffect(() => getSearch(), []);
	// useEffect(getAnimeTwo(), [])
	// useEffect(getAnimeThree(), [])

	return (
		<div>
			<Search />
		</div>
	);
};

export default App;
