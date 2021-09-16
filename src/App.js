import React, { useEffect } from 'react'
import { getAnimeOne, getAnimeTwo, getAnimeThree } from './utils/axiosRequest';


const App = () => {
  useEffect(getAnimeOne(), [])
  // useEffect(getAnimeTwo(), [])
  // useEffect(getAnimeThree(), [])

  return <div>App</div>
}

export default App
