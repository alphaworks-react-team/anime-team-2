import React from 'react'
import { BiSearchAlt } from 'react-icons/bi'
import { Button, Form, Input } from './fragments/SearchBar/index'
import styled from 'styled-components'

const Icon = styled(BiSearchAlt)`
  background-color: transparent;
`

const SearchBar = () => {
  return (
    <Form>
      <Input type='text' placeholder='Search' />
      <Button bgColor='lightgray' type='submit'>
        <Icon />
      </Button>
    </Form>
  )
}

export default SearchBar
