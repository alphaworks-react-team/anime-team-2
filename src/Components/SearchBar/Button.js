import { Button as BaseButton } from '../Inputs/index'
import React from 'react'
import { RiSearchEyeLine } from 'react-icons/ri'
import styled from 'styled-components'

const SearchButton = styled(BaseButton)`
  background-color: tomato;
  /* :hover {
    background-color: slategray;
  } */
`

const Icon = styled(RiSearchEyeLine)`
  font-size: 1rem;
  color: black;
`
const Button = () => {
  return (
    <SearchButton>
      <Icon />
    </SearchButton>
  )
}

export default Button
