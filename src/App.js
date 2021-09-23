import React, { useState, useEffect } from 'react'
import Global from './Styles/Global'
import { NavBar } from './Components/index'
import styled from 'styled-components'

const Container = styled.div`
  height: 70dvh;
  width: 100dvw;
  overflow: scroll;
`

const App = () => {
  // useEffect(() => getSearch(), []);
  // useEffect(getAnimeTwo(), [])
  // useEffect(getAnimeThree(), [])
  const [show, setShow] = useState(false)

  return (
    <>
      <Global />
      <NavBar />
    </>
  )
}

export default App
