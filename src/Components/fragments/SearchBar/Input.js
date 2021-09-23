import React from 'react'
import styled from 'styled-components'

const SearchInput = styled.input`
  padding: 10px;
  background-color: transparent;
  border: 0.01rem solid lightgray;
  border-radius: 0.4rem;
  height: 2rem;
  text-align: center;
  /* outline:  */
  width: 100%;
  align-self: center;
`

const Input = ({ onChange, placeholder, type }) => {
  return <SearchInput onChange={onChange} placeholder={placeholder} type={type} />
}

export default Input
