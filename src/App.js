import React from 'react';
import Global from './Styles/global';
import Home from './Components/Pages/Home/Home';
import Search from './Components/Pages/Search/Search';
import TopAnime from './Components/Pages/Home/TopAnime';
import TrendingAnime from './Components/Pages/Home/TrendingAnime';
import TrendingManga from './Components/Pages/Home/TrendingManga';

const App = () => {
	return (
		<>
			<Global />
			<Search />

			<TrendingAnime />
			<TrendingManga />

			<TopAnime />
		</>
	);
};

export default App;
