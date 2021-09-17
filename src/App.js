import React from 'react'
// import { getSearch } from './utils/axiosRequest'
import SearchBar from './Components/SearchBar/SearchBar'
import styled from 'styled-components'

const Container = styled.div`
  align-items: center;
  display: flex;
  gap: 6rem;
  flex-basis: 100%;
  height: 100dvh;
  justify-content: center;
  width: 100dvw;
`

const App = () => {
  // useEffect(getAnimeOne(), [])
  // useEffect(getAnimeTwo(), [])

  // useEffect(() => getSearch())

  return (
    <Container>
      <h1>App</h1>
      <SearchBar />
    </Container>
  )
}

export default App
