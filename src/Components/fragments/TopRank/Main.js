import React from 'react'
import styled from 'styled-components'
import { px2vw } from '../utils/index'

const TopMain = styled.div`
  background-color: #fbfbfb;
  display: flex;

  flex: 4;
  text-align: left;
  font-weight: 600;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
`

const Main = ({ children }) => {
  return <TopMain>{children}</TopMain>
}

export default Main
