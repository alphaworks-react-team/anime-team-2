import { useState } from 'react'
import { RequestOptions } from '../utils/index'

import styled from 'styled-components'
import axios from 'axios'

const Container = styled.div``

const SearchResults = props => {
  const [anime, setAnime] = useState([])
  const [input, setInput] = useState('')
  const { Search } = RequestOptions

  const mapResults = ({ results }) => {
    const mapper = results?.map(result => (
      <div key={result?.id}>
        <img src={result?.images.large} alt='anime' />
        <h1>{result?.titles.english}</h1>
        <h2>{result?.titles.japanese}</h2>
        <p>{result?.generalInfo.startDate}</p>
      </div>
    ))
    return mapper
  }

  const onSubmitOne = async e => {
    e.preventDefault()
    const searchResults = await Search({ input }, 'anime', 20)
    setAnime({ searchResults })
    const onSubmitTwo = async e => {
      e.preventDefault()
      axios
        .get(`https://kitsu.io/api/edge/anime?filter[text]=${input}`)
        .then(res => setAnime(res.data.data))
        .catch(err => console.log(err))
    }
    return { searchResults }
  }

  return <Container> </Container>
}

export default SearchResults

{
  /* {mapResults({ anime })} */
}
