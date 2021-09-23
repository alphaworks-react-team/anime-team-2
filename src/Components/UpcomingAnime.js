import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {Card, Image, Section, Text, Title} from './fragments/Card/index'
import {RequestOptions} from '../utils/index'

const UpcomingAnime = () => {
  const [upcomingAnime, setUpcomingAnime] = useState([])
  const {General: UpcomingRequest} = RequestOptions

  const renderUpcoming = () => {
    return upcomingAnime?.map((anime, index) => {
      <>
        <Title>{anime.titles.enlgish}</Title>
        <
      </>
    })
  }

  return <Section></Section>
}

export default UpcomingAnime
