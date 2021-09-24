import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  height: 100%;
  margin-left: 6px;
  background-color: #fbfbfb;
`

const ColBox = ({ children }) => {
  return <Container>{children}</Container>
}

export default ColBox
