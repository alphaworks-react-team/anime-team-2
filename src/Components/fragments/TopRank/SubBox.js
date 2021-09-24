import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: 30%;
  margin: 2px;
  background-color: #fbfbfb;
`

const SubBox = ({ children }) => {
  return <Container>{children}</Container>
}

export default SubBox
