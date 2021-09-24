import React from 'react'
import styled from 'styled-components'

const CardImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: fill;
`

const Image = ({ src }) => {
  return <CardImage src={src} />
}

export default Image
