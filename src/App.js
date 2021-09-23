import React from 'react';
import Global from './Styles/global';
<<<<<<< HEAD
import { NavBar } from './Components/index';
const App = () => {
	return (
		<>
			<Global />
			<NavBar />
		</>
	);
};
=======
import Home from './Components/Pages/Home/Home';

import TopAnime from './Components/Pages/Home/TopAnime';
import TrendingAnime from './Components/Pages/Home/TrendingAnime';
import TrendingManga from './Components/Pages/Home/TrendingManga';
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
>>>>>>> 4dfb4040dffde7bea0bc25e4fbfc3a0d203a0aed

export default App;
