import React from 'react'
import styled from 'styled-components'
import { TopAnime, TrendingAnime, TrendingManga } from '../Components/index'
import PageContainer from '../Components/fragments/PageContainer'

// const Container = styled.div`
//   height: auto;
//   width: 70vw;
// `

const Home = () => {
  return (
    <PageContainer>
      <TrendingAnime />
      <TrendingManga />
      <TopAnime />
    </PageContainer>
  )
}

export default Home
