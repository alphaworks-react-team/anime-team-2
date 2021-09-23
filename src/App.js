// import React, { useState, useEffect } from 'react'
import React from 'react'
import Global from './Styles/Global'
import { NavBar } from './Components/index'
import styled from 'styled-components'

// const Container = styled.div`
//   height: 70dvh;
//   width: 100dvw;
//   overflow: scroll;
// `

const App = () => {
	return (

    <>
      <Global />
      <NavBar />
    </>
  )
}

export default App
