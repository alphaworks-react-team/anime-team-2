import React from 'react'
import styled from 'styled-components'
import { px2vw } from '../utils/index'

const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: ${px2vw(1500)};
`

const Container = ({ children }) => {
  return <TopContainer>{children}</TopContainer>
}

export default Container
