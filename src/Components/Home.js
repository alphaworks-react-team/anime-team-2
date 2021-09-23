// import React, { useState } from 'react';
import React from 'react'
import { Section, Box, BoxTitle, BoxImage } from '../Styles/Home.js'

export default function Home({ boxData }) {
  // const [show, setShow] = useState(false);

  return (
    <Section>
      {boxData?.map((box, index) => (
        <Box key={index} bgColor={box.bgColor}>
          <BoxTitle>{box.title}</BoxTitle>
          <BoxImage />
        </Box>
      ))}
    </Section>
  )
}

// {boxData.map((box, index) => (
//   <Box key={index} shown={show} bgColor={box.bgColor}>
//     <BoxTitle>{box.title}</BoxTitle>
//     <BoxImage
//       onMouseEnter={() => setShow(true)}
//       onMouseLeave={() => setShow(false)}
//       img={`https://picsum.photos/200/300`}
//       alt='No Image'
//     />
//   </Box>
// ))}
