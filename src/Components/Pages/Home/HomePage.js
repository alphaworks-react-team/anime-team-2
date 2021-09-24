import React from 'react'
import { TopAnime, TrendingAnime, TrendingManga, UpcomingAnime } from './index'

const HomePage = () => {
  return (
    <div>
      <TrendingAnime />
      <TrendingManga />
      <UpcomingAnime />
      <TopAnime />
    </div>
  )
}

export default HomePage
