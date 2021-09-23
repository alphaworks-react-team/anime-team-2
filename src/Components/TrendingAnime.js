import React, { useEffect, useState } from 'react'
import { RequestOptions } from '../utils/index'
import { Section, Box, BoxTitle, BoxImage } from '../Styles/Home.js'

const TrendingAnime = () => {
  const [trendingAnime, setTrendingAnime] = useState([])
  const { Trending: TrendingAnimeRequest } = RequestOptions

  const renderTrending = () => {
    return trendingAnime?.map((box, index) => (
      <div key={index}>
        <BoxTitle key={box.title}>{box.titles.english}</BoxTitle>
        <Box key={box.id} bgColor={box.bgColor}>
          <img src={box.images.medium} alt='Trending Anime' />
        </Box>
      </div>
    ))
  }

  useEffect(() => {
    ;(async () => {
      TrendingAnimeRequest('anime', 5, data => {
        setTrendingAnime(data)
      })
    })()
  }, [])

  return <Section>{renderTrending()}</Section>
}

export default TrendingAnime

//  <Section>
//     {' '}
//     {trending?.map(item => (
//       <Box key={item.id}>
//         <h1>{item.id}</h1>
//         <img src={item.images.large} />
//       </Box>
//     ))}
//   </Section>
