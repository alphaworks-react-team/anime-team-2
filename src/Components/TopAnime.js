<<<<<<< HEAD:src/Components/TopAnime.js
import React from 'react'
=======
import React, { useEffect, useState } from 'react'
>>>>>>> 4dfb4040dffde7bea0bc25e4fbfc3a0d203a0aed:src/Components/Pages/Home/TopAnime.js
import {
  TopSection,
  TopMain,
  TopLeft,
  TopContainer,
  ColBox,
  SubBox,
<<<<<<< HEAD:src/Components/TopAnime.js
} from '../Styles/Home.js'

export default function TopAnime({ topTen }) {
  return (
    <TopContainer>
      {topTen?.map((info, index) => (
        <TopSection>
          <TopLeft></TopLeft>
          <TopMain>
            <ColBox>
              <SubBox>SubBox</SubBox>
              <SubBox>SubBox</SubBox>
            </ColBox>
            <ColBox>
              <SubBox>SubBox</SubBox>
              <SubBox>SubBox</SubBox>
            </ColBox>
            <ColBox>
              <SubBox>SubBox</SubBox>
              <SubBox>SubBox</SubBox>
            </ColBox>
          </TopMain>
        </TopSection>
      ))}
    </TopContainer>
  )
=======
} from './HomeStyle.js'
import { RequestOptions } from '../../../utils/index'

export default function TopAnime() {
  const [topAnime, setTopAnime] = useState([])
  const { General: TopAnimeRequest } = RequestOptions

  const renderTopAnime = () => {
    topAnime?.map((anime, index) => (
      <TopSection key={index}>
        <TopLeft></TopLeft>
        <TopMain>
          <ColBox>
            <SubBox>SubBox</SubBox>
            <SubBox>SubBox</SubBox>
          </ColBox>
          <ColBox>
            <SubBox>SubBox</SubBox>
            <SubBox>SubBox</SubBox>
          </ColBox>
          <ColBox>
            <SubBox>SubBox</SubBox>
            <SubBox>SubBox</SubBox>
          </ColBox>
        </TopMain>
      </TopSection>
    ))
  }

  return <TopContainer>{}</TopContainer>
>>>>>>> 4dfb4040dffde7bea0bc25e4fbfc3a0d203a0aed:src/Components/Pages/Home/TopAnime.js
}
