import React, { useEffect } from 'react'
import styled from 'styled-components'
import Global from './Styles/global'
import Home from './Components/Pages/Home/Home'
import Search from './Components/Pages/Search/Search'
import { Container } from './Components/Pages/Home/HomeStyle'

// const RootStyle = styled.div`
// 	background-color: #edf1f5;
// 	margin:0;
// 	padding:0;
// 	height: 100%;
// 	width: 100%;
// 	display: flex;
// 	flex-direction: column;
// 	align-items: center;

// `;
// const PageContent = styled.div`
// 	background-color: #808080;
// 	height: 100vh;
// 	width: 80vw;
// 	display: flex;
// 	flex-direction: column;
// 	align-items: center;
// `;
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
const App = () => {
  // useEffect(() => getSearch(), []);
  // useEffect(getAnimeTwo(), [])
  // useEffect(getAnimeThree(), [])

  return (
    <>
      <Global />
      <Search />
      <Home boxData={data} />
      <Home boxData={data} />
      <Home boxData={data} />
    </>
  )
}

export default App
