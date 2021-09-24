import React from 'react'

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

const SearchResults = () => {
  return (
    <div>
      <h1>Search Results</h1>
    </div>
  )
}

export default SearchResults
