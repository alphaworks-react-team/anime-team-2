import React, { useState } from 'react'
import { Field, Form } from '../Inputs/index'
import Button from './Button'
import { getSearch } from '../../utils/axiosRequest'
// import styled from 'styled-components'

const SearchBar = () => {
  const [input, setInput] = useState('')

  const inputPlaceholder = `Search for Anime`
  const handleChange = event => {
    event.preventDefault()
    const currentInput = event.target.value
    setInput(currentInput)
  }

  const handleSubmit = async () => {
    try {
      await getSearch({ input })
    } catch (error) {
      console.error({ error })
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Field
        type='text'
        placeholder={inputPlaceholder}
        onChange={event => handleChange(event)}
      />
      <Button type='submit' />
    </Form>
  )
}

export default SearchBar
