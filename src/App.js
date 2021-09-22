import React, { useState, useEffect } from 'react'
import Global from './Styles/global'
import Home from './Components/Pages/Home/Home'
import Search from './Components/Pages/Search/Search'
import TopAnime from './Components/Pages/Home/TopAnime'
import TrendingAnime from './Components/Pages/Home/TrendingAnime'
import TrendingManga from './Components/Pages/Home/TrendingManga'

const App = () => {
  // useEffect(() => getSearch(), []);
  // useEffect(getAnimeTwo(), [])
  // useEffect(getAnimeThree(), [])
  const [show, setShow] = useState(false)

  return (
    <>
      <Global />
      <Search />

      <TrendingAnime />
      <TrendingManga />

      <TopAnime />
    </>
  )
}

export default App
