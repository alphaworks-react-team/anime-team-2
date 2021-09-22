import React, { useEffect, useState } from 'react'
import { RequestOptions } from '../../../utils/index'
import { Section, Box, BoxTitle, BoxImage } from './HomeStyle.js'

const Trending = () => {
  const [trending, setTrending] = useState([])
  const { Trending: TrendingRequest } = RequestOptions

  const renderTrending = () => {
    trending?.map((box, index) => (
      <Box key={index} bgColor={box.bgColor}>
        <BoxTitle>{box.id}</BoxTitle>
        <BoxImage src={box.images.large} />
      </Box>
    ))
  }

  useEffect(() => {
    ;(async () => {
      TrendingRequest(5, data => {
        setTrending(data)
      })
    })()
  }, [])

  return (
    <>
      {' '}
      {trending?.map(item => (
        <h1>{item.id}</h1>
      ))}
      {/* <Section>{null}</Section> */}
    </>
  )
}

export default Trending
