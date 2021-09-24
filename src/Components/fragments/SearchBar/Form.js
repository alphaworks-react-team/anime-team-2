import React from 'react'
import styled from 'styled-components'

const Container = styled.form`
  display: inline-flex;
  justify-content: center;
  background-color: transparent;
`

const Form = ({ children }) => {
  return <Container>{children}</Container>
}

export default Form
