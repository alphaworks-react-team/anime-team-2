// import React, { useState } from 'react';
<<<<<<< HEAD:src/Components/Home.js
import React from 'react'
import { Section, Box, BoxTitle, BoxImage } from '../Styles/Home.js'
=======
import React from 'react';
import { Section, Box, BoxTitle, BoxImage } from './HomeStyle.js';
>>>>>>> 4dfb4040dffde7bea0bc25e4fbfc3a0d203a0aed:src/Components/Pages/Home/Home.js

export default function Home({ boxData }) {
	return (
		<Section>
			{boxData?.map((box, index) => (
				<Box key={index} bgColor={box.bgColor}>
					<BoxTitle>{box.title}</BoxTitle>
					<BoxImage />
				</Box>
			))}
		</Section>
	);
}
