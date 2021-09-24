import React from 'react';
import Global from './Styles/global';
import TopAnime from './Components/Pages/Home/TopAnime';
import TrendingAnime from './Components/Pages/Home/TrendingAnime';
import TrendingManga from './Components/Pages/Home/TrendingManga';
import UpcomingAnime from './Components/Pages/Home/UpcomingAnime';
import Grid from './Components/Pages/Grid/Grid';
import Navbar from './Components/Nav/Navbar';

const App = () => {
	return (
		<>
			<Global />
			<Navbar />
			<TrendingAnime />
			<TrendingManga />
			<UpcomingAnime />
			<TopAnime />
		</>
	);
};

export default App;
