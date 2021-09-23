import React from 'react';
import Global from './Styles/global';
import Home from './Components/Pages/Home/Home';

import TopAnime from './Components/Pages/Home/TopAnime';
import TrendingAnime from './Components/Pages/Home/TrendingAnime';
import TrendingManga from './Components/Pages/Home/TrendingManga';
<<<<<<< HEAD
import Grid from './Components/Pages/Grid/Grid';

const App = () => {
	return (
		<>
			<Global />
			<Search />

			<TrendingAnime />
			<TrendingManga />
			<Grid />
			<TopAnime />
		</>
	);
};
=======
import UpcomingAnime from './Components/Pages/Home/UpcomingAnime'
import Grid from './Components/Pages/Grid/Grid'
import Navbar from './Components/Nav/Navbar'
import styled from 'styled-components'

const Container = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
`
const App = () => {
  return (
    <>
      <Global />
      <Navbar />
      <TrendingAnime />
      <TrendingManga />
      <UpcomingAnime />
      <Grid />
      <TopAnime />
    </>
  )
}
>>>>>>> dev

export default App;
