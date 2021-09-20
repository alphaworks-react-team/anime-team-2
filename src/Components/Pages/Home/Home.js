import React from 'react';
import { Section, Box, BoxTitle, BoxText } from './HomeStyle.js';

export default function Home({ boxData }) {
	return (
		<Section>
			{boxData.map(box => (
				<Box key={box.id} bgColor={box.bgColor}>
					<BoxTitle>{box.title}</BoxTitle>
					<BoxText>{box.text}</BoxText>
				</Box>
			))}
		</Section>
	);
}
