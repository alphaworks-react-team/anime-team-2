import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { RequestOptions } from '../../../utils/index'
import { Box, BoxImage, BoxText, BoxTitle, Section } from './HomeStyle'

const UpcomingAnime = () => {
  const [upcomingAnime, setUpcomingAnime] = useState([])
  const { Filter: UpcomingRequest } = RequestOptions

  useEffect(() => {
    ;(async () => {
      UpcomingRequest('anime', 'status', 'upcoming', 5, data => {
        setUpcomingAnime(data)
      })
    })()
  }, [])

  const renderUpcoming = () => {
    return upcomingAnime?.map((box, index) => {
      return (
        <Section key={index}>
          <div>
            <BoxTitle key={box.title}>{box.titles.english}</BoxTitle>
            <Box>
              <BoxImage src={box.images.medium} />
            </Box>
          </div>
        </Section>
      )
    })
  }

  return <Section>{renderUpcoming()}</Section>
}

export default UpcomingAnime
