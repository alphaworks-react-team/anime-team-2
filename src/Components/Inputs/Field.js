import React from 'react'
import styled from 'styled-components'

const Input = styled.input`
  background: lightgray;
  border: none;
  border-radius: 0.25rem;
  color: slategray;
  font-size: 0.25rem;
  height: 1.25rem;
  outline: none;
  text-align: center;
  width: 9rem;
`

const Field = ({ onChange, placeholder, type, value }) => {
  return <Input onChange={onChange} placeholder={placeholder} type={type} value={value} />
}

export default Field
