import React, { useEffect, useState } from 'react'
import { RequestOptions } from '../utils/index'
import { Section, Box, BoxTitle, BoxImage } from '../Styles/Home.js'

const TrendingManga = () => {
  const [trendingManga, setTrendingManga] = useState([])
  const { Trending } = RequestOptions

  const renderTrendingManga = () => {
    return trendingManga?.map((box, index) => (
      <div key={index}>
        <BoxTitle key={box.title}>{box.titles.english}</BoxTitle>
        <Box key={box.id} bgColor={box.bgColor}>
          <img src={box.images.medium} alt='Trending Manga' />
        </Box>
      </div>
    ))
  }

  useEffect(() => {
    ;(async () => {
      Trending('manga', 5, data => {
        setTrendingManga(data)
      })
    })()
  }, [])

  return <Section>{renderTrendingManga()}</Section>
}

export default TrendingManga

//  <Section>
//     {' '}
//     {trending?.map(item => (
//       <Box key={item.id}>
//         <h1>{item.id}</h1>
//         <img src={item.images.large} />
//       </Box>
//     ))}
//   </Section>
