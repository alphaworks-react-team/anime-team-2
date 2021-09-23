import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Links, Routes } from './fragments/Nav/index'
import { SearchBar } from './index'
import PageContainer from './fragments/PageContainer'
import styled from 'styled-components'

const Container = styled.nav`
  /* z-index: 666; */
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  height: 10vh;
  width: 100vw;
  background-color: slateblue;
  color: slategray;
`

const NavBar = () => {
  return (
    <Container>
      <BrowserRouter>
        {Links()}
        {Routes()}
      </BrowserRouter>
      <SearchBar />
    </Container>
  )
}

export default NavBar
