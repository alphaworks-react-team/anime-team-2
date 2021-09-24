import React, { useEffect, useState } from 'react';
import { RequestOptions } from '../../../utils/index';
import { Section, Box, BoxTitle, BoxImage } from './HomeStyle.js';

const TrendingManga = () => {
	const [trendingManga, setTrendingManga] = useState([]);
	const { Trending } = RequestOptions;

	const renderTrendingManga = () => {
		return trendingManga?.map((box, index) => (
			<Section key={index}>
				<div>
					<BoxTitle key={box.title}>{box.titles.english}</BoxTitle>
					<Box key={box.id} bgColor={box.bgColor}>
						<img src={box.images.small} alt='Trending Anime' />
					</Box>
				</div>
			</Section>
		));
	};

	useEffect(() => {
		(async () => {
			Trending('manga', 5, data => {
				setTrendingManga(data);
			});
		})();
	}, []);

	return (
		<div>
			<h1 style={{ paddingLeft: '16px', paddingTop: '16px' }}>
				Trending Manga
			</h1>
			<Section>{renderTrendingManga()}</Section>
		</div>
	);
};

export default TrendingManga;

//  <Section>
//     {' '}
//     {trending?.map(item => (
//       <Box key={item.id}>
//         <h1>{item.id}</h1>
//         <img src={item.images.large} />
//       </Box>
//     ))}
//   </Section>
