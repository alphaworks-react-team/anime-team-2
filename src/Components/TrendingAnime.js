<<<<<<< HEAD:src/Components/TrendingAnime.js
import React, { useEffect, useState } from 'react'
import { RequestOptions } from '../utils/index'
import { Section, Box, BoxTitle, BoxImage } from '../Styles/Home.js'
=======
import React, { useEffect, useState } from 'react';
import { RequestOptions } from '../../../utils/index';
import { Section, Box, BoxTitle } from './HomeStyle.js';
>>>>>>> 4dfb4040dffde7bea0bc25e4fbfc3a0d203a0aed:src/Components/Pages/Home/TrendingAnime.js

const TrendingAnime = () => {
	const [trendingAnime, setTrendingAnime] = useState([]);
	const { Trending: TrendingAnimeRequest } = RequestOptions;

	const renderTrending = () => {
		return trendingAnime?.map((box, index) => (
      <Section key={index}>
        <div>
          <BoxTitle key={box.title}>{box.titles.english}</BoxTitle>
          <Box key={box.id} bgColor={box.bgColor}>
            <img src={box.images.small} alt='Trending Anime' />
          </Box>
        </div>
      </Section>
    ))
	};

	useEffect(() => {
		(async () => {
			TrendingAnimeRequest('anime', 5, data => {
				setTrendingAnime(data);
			});
		})();
	}, []);

	return (
		<div>
			<h1 style={{ paddingLeft: '16px' }}>Trending Anime</h1>
			<Section>{renderTrending()}</Section>
		</div>
	);
};

export default TrendingAnime;
