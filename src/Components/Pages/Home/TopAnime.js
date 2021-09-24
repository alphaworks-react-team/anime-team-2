import React, { useEffect, useState } from 'react'
import {
  BoxTitle as TopTitle,
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
  const { Sort: TopAnimeRequest } = RequestOptions

  useEffect(() => {
    ;(async () => {
      TopAnimeRequest('anime', 'averageRating', data => {
        setTopAnime(data)
      })
    })()
  }, [])

  const renderTopAnime = () => {
    return topAnime?.map((anime, index) => (
      <TopSection key={index}>
        <TopLeft>
          <TopTitle>{anime.title}</TopTitle>
          <img
            alt={`Top Anime: ${anime.title}`}
            style={{ height: '3rem', width: '1.5rem' }}
            src={anime.images.tiny}
          />
        </TopLeft>
        <TopMain>
          <ColBox>
            <SubBox>{anime.reviews.userPopularity.approvalPercent}</SubBox>
            <SubBox>{anime.reviews.userPopularity.rank}</SubBox>
          </ColBox>
          <ColBox>
            <SubBox>{anime.generalInfo.mediaType}</SubBox>
            <SubBox>{anime.episodeInfo.lengthInMinutes}</SubBox>
          </ColBox>
          <ColBox>
            <SubBox>{anime.generalInfo.startDate}</SubBox>
            <SubBox>{anime.generalInfo.status}</SubBox>
          </ColBox>
        </TopMain>
      </TopSection>
    ))
  }

  return <TopContainer>{renderTopAnime()}</TopContainer>
}
