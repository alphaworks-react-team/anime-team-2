import React from 'react'
import styled from 'styled-components'

const Input = styled.button`
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  font-size: 0.25rem;
  height: 1.35rem;
  outline: none;
  text-align: center;
  width: 100%;
  :hover {
    background-color: slategray;
    opacity: 0.25;
  }
`

const Button = ({ children, onClick, type, value }) => {
  return (
    <Input onClick={onClick} type={type} value={value}>
      {children}
    </Input>
  )
}

export default Button
