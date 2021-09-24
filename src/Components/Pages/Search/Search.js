import { useState } from 'react';
import { RequestOptions } from '../../../utils/index';
import styled from 'styled-components';
import axios from 'axios';


const Content = styled.div`
  display: flex;
  justify-content: center;
  height: 50%;
  background-color: #26466d;
  border-radius: 5px;
  @media (min-width: 425px) {
    width: 50%;
    @media (min-width: 768px) {
      width: 50%;
    }
    @media (min-width: 1024px) {
      width: 90%;
    }
  }
`

const Button = styled.button`
  background-color: #36648b;
  color: #edf1f5;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  height: 100%;
  border: none;
  outline: none;
  transition: transform 0.1s ease-in;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.09);
    transform: scale(1.02);
  }
  @media (min-width: 425px) {
    width: 30%;
  }
  @media (min-width: 768px) {
    width: 10%;
  }
  @media (min-width: 1024px) {
    width: 10%;
  }
`
const InputStyles = styled.input`
  width: 90%;
  height: 100%;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  background-color: #f4f4f4;
  border: none;
  outline: none;
  align-self: center;
  @media (min-width: 425px) {
    width: 70%;
  }
  @media (min-width: 768px) {
    width: 90%;
  }
  @media (min-width: 1024px) {
    width: 30%;
  }
`

const Search = props => {
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

  // const animeSearch = document.querySelector('#text').value;
  // axios
  // 	.get(`https://kitsu.io/api/edge/anime?filter[text]=${input}`)
  // 	.then(res => setAnime(res.data.data))
  // 	.catch(err => console.log(err));

  return (
    <Content>
      <InputStyles
        id='text'
        type='text'
        onChange={e => setInput(e.target.value)}
        placeholder='search anime'
        name='search'
      />
      <Button onClick={onSubmitOne} type='submit' bgColor='green' color='white'>
        search
      </Button>
    </Content>
  )
}

export default Search;

