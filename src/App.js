import React, { useEffect } from 'react'
 
const App = () => {
  useEffect(getAnimeOne(), [])
  // useEffect(getAnimeTwo(), [])
  // useEffect(getAnimeThree(), [])

  return <div>App</div>
}

export default App
