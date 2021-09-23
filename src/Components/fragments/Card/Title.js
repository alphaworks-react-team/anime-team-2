import React from 'react'
import styled from 'styled-components'

const CardTitle = styled.h3`
  color: #333333;
  font-size: 2rem;
  text-align: center;

  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
`

const Title = ({ children }) => {
  return <CardTitle>{children}</CardTitle>
}

export default Title
