import React from 'react'
import styled from 'styled-components'

const Container = styled.form`
  align-items: center;
  display: flex;
  gap: 0.25rem;
  height: 1rem;
  justify-content: space-around;
  width: 6rem;
`

const Form = ({ children }) => {
  return <Container>{children}</Container>
}

export default Form
