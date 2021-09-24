import React from 'react'
import styled from 'styled-components'
import { px2vw } from '../utils/index'

const TopSection = styled.div`
  display: flex;
  flex-flow: row;
  margin: ${px2vw(32)};
  max-width: 100%;
  min-height: ${px2vw(80)};
  border-radius: 3px;
  box-shadow: 1px 15px 25px -5px rgba(0, 0, 0, 0.05);
  -webkit-box-shadow: 1px 15px 25px -5px rgba(0, 0, 0, 0.05);
  -moz-box-shadow: 1px 15px 25px -5px rgba(0, 0, 0, 0.05);
`

const Section = ({ children }) => {
  return <TopSection>{children}</TopSection>
}

export default Section
