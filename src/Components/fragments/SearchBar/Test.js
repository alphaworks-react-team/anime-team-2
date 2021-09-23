import React from 'react';
import { Section, Box, BoxTitle, BoxImage } from '../Home/HomeStyle';

export default function Test({ searchData }) {
	return (
		<Section>
			{searchData.map((search, index) => (
				<Box key={index} bgColor={search.bgColor}>
					<BoxTitle>{search.title}</BoxTitle>
					<BoxImage />
				</Box>
			))}
		</Section>
	);
}
