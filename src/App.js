import React from 'react';

import Global from './Styles/global';
import Home from './Components/Pages/Home/Home';
import Search from './Components/Pages/Search/Search';
import TopAnime from './Components/Pages/Home/TopAnime';
import Test from './Components/Pages/Search/Test';

const data = [
	{
		id: Math.random(),
		title: 'Box title 1',

		bgColor: '#D5CAFA',
	},
	{
		id: Math.random(),
		title: 'Box title 2',
		bgColor: '#EDA9A9',
	},
	{
		id: Math.random(),
		title: 'Box title 3',
		bgColor: '#F2EE8D',
	},
	{
		id: Math.random(),
		title: 'Box titulo 4',
		bgColor: '#9FEACD',
	},
	{
		id: Math.random(),
		title: 'Box title 5',
		bgColor: '#D5CAFA',
	},
];
const topData = [
	{
		rank: 'rank',
		genre: 'genre',
		popularity: 'popularity',
		percentage: 'percent',
	},
	{
		rank: 'rank',
		genre: 'genre',
		popularity: 'popularity',
		percentage: 'percent',
	},
	{
		rank: 'rank',
		genre: 'genre',
		popularity: 'popularity',
		percentage: 'percent',
	},
	{
		rank: 'rank',
		genre: 'genre',
		popularity: 'popularity',
		percentage: 'percent',
	},
	{
		rank: 'rank',
		genre: 'genre',
		popularity: 'popularity',
		percentage: 'percent',
	},
	{
		rank: 'rank',
		genre: 'genre',
		popularity: 'popularity',
		percentage: 'percent',
	},
	{
		rank: 'rank',
		genre: 'genre',
		popularity: 'popularity',
		percentage: 'percent',
	},
	{
		rank: 'rank',
		genre: 'genre',
		popularity: 'popularity',
		percentage: 'percent',
	},
	{
		rank: 'rank',
		genre: 'genre',
		popularity: 'popularity',
		percentage: 'percent',
	},
	{
		rank: 'rank',
		genre: 'genre',
		popularity: 'popularity',
		percentage: 'percent',
	},
];
// const results = [
// 	{
// 		id: Math.random(),
// 		title: 'search',
// 		bgColor: '#D5CAFA',
// 	},
// 	{
// 		id: Math.random(),
// 		title: 'search',
// 		bgColor: '#EDA9A9',
// 	},
// 	{
// 		id: Math.random(),
// 		title: 'search',
// 		bgColor: 'green',
// 	},
// 	{
// 		id: Math.random(),
// 		title: 'search',
// 		bgColor: '#9FEACD',
// 	},
// 	{
// 		id: Math.random(),
// 		title: 'search',
// 		bgColor: '#D5CAFA',
// 	},
// 	{
// 		id: Math.random(),
// 		title: 'search',
// 		bgColor: '#D5CAFA',
// 	},
// 	{
// 		id: Math.random(),
// 		title: 'search',
// 		bgColor: '#EDA9A9',
// 	},
// 	{
// 		id: Math.random(),
// 		title: 'search',
// 		bgColor: 'green',
// 	},
// 	{
// 		id: Math.random(),
// 		title: 'search',
// 		bgColor: '#9FEACD',
// 	},
// 	{
// 		id: Math.random(),
// 		title: 'search',
// 		bgColor: '#D5CAFA',
// 	},
// 	{
// 		id: Math.random(),
// 		title: 'search',
// 		bgColor: '#D5CAFA',
// 	},
// 	{
// 		id: Math.random(),
// 		title: 'search',
// 		bgColor: '#EDA9A9',
// 	},
// 	{
// 		id: Math.random(),
// 		title: 'search',
// 		bgColor: 'green',
// 	},
// 	{
// 		id: Math.random(),
// 		title: 'search',
// 		bgColor: '#9FEACD',
// 	},
// 	{
// 		id: Math.random(),
// 		title: 'search',
// 		bgColor: '#D5CAFA',
// 	},
//   {
// 		id: Math.random(),
// 		title: 'search',
// 		bgColor: '#D5CAFA',
// 	},
// 	{
// 		id: Math.random(),
// 		title: 'search',
// 		bgColor: '#EDA9A9',
// 	},
// 	{
// 		id: Math.random(),
// 		title: 'search',
// 		bgColor: 'green',
// 	},
// 	{
// 		id: Math.random(),
// 		title: 'search',
// 		bgColor: '#9FEACD',
// 	},
// 	{
// 		id: Math.random(),
// 		title: 'search',
// 		bgColor: '#D5CAFA',
// 	},
//   {
// 		id: Math.random(),
// 		title: 'search',
// 		bgColor: '#D5CAFA',
// 	},
// 	{
// 		id: Math.random(),
// 		title: 'search',
// 		bgColor: '#EDA9A9',
// 	},
// 	{
// 		id: Math.random(),
// 		title: 'search',
// 		bgColor: 'green',
// 	},
// 	{
// 		id: Math.random(),
// 		title: 'search',
// 		bgColor: '#9FEACD',
// 	},
// 	{
// 		id: Math.random(),
// 		title: 'search',
// 		bgColor: '#D5CAFA',
// 	},
// ];
const App = () => {
	return (
		<>
			<Global />
			<Search />

			<Home />
			<Home />
			<Home />
			<Test />
			<TopAnime />
		</>
	);
};

export default App;
