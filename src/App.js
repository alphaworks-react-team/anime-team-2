import React, { useState , useEffect } from 'react'
import styled from 'styled-components'
import Global from './Styles/global'
import Home from './Components/Pages/Home/Home'
import Search from './Components/Pages/Search/Search'
import TopAnime from './Components/Pages/Home/TopAnime'
import Trending from './Components/Pages/Home/Trending'

const lorem =
  'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, sed iure blanditiis voluptatum nulla quidem minus quam tempora obcaecati necessitatibus inventore! Vitae totam quam pariatur facilis fugit maxime adipisci eaque.'

const data = [
  {
    id: Math.random(),
    title: 'Box title 1',
    text: lorem,
    bgColor: '#D5CAFA',
  },
  {
    id: Math.random(),
    title: 'Box title 2',
    text: lorem,
    bgColor: '#EDA9A9',
  },
  {
    id: Math.random(),
    title: 'Box title 3',
    text: lorem,
    bgColor: '#F2EE8D',
  },
  {
    id: Math.random(),
    title: 'Box titulo 4',
    text: lorem,
    bgColor: '#9FEACD',
  },
  {
    id: Math.random(),
    title: 'Box title 5',
    text: lorem,
    bgColor: '#D5CAFA',
  },
]
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
]

const App = () => {
  // useEffect(() => getSearch(), []);
  // useEffect(getAnimeTwo(), [])
  // useEffect(getAnimeThree(), [])
  const [show, setShow] = useState(false)

  return (
    <>
      <Global />
      <Search />

      <Trending />
      <Home />
      <Home />
      <TopAnime />
    </>
  )
}

export default App
