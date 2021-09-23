// import React, { useState } from 'react';
import React from 'react';
import { Section, Box, BoxTitle, BoxImage } from './HomeStyle.js';

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
