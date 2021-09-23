import React from 'react'
import styled from 'styled-components'
import { px2vw } from '../utils/index'

const TopLeft = styled.div`
  flex: 8;
  background-color: #fbfbfb;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
`

const Left = ({ children }) => {
  return <TopLeft>{children}</TopLeft>
}

export default Left
