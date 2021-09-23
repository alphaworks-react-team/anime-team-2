import React from 'react'
import styled from 'styled-components'
import { px2vw } from '../utils/index'

export const CardContainer = styled.div`
  display: flex;
  width: ${px2vw(320, 320)};
  min-height: ${px2vw(200, 320)};
  flex-direction: column;
  padding: ${px2vw(20)};
  margin: ${px2vw(20)};
  background-color: ${props => props.bgColor};
  height: 100%;
  border-radius: 3px;
  box-shadow: 1px 15px 25px -5px rgba(0, 0, 0, 0.08);
  -webkit-box-shadow: 1px 15px 25px -5px rgba(0, 0, 0, 0.08);
  -moz-box-shadow: 1px 15px 25px -5px rgba(0, 0, 0, 0.08);

  @media (min-width: 768px) {
    width: ${px2vw(320, 768)};
    min-height: ${px2vw(200, 768)};
    height: 100%;
  }

  @media (min-width: 1024px) {
    width: ${px2vw(500)};
    min-height: ${px2vw(300)};
  }
`
const Card = ({ children }) => {
  return <CardContainer>{children}</CardContainer>
}

export default Card
