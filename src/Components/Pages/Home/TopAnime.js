import React, { useEffect, useState } from 'react'
import {
  TopSection,
  TopMain,
  TopLeft,
  TopContainer,
  ColBox,
  SubBox,
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
}
