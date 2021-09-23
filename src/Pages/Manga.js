<<<<<<< HEAD:src/Pages/Manga.js
import React, { useEffect, useState } from 'react'
import { RequestOptions } from '../utils/index'
import { Section, Box, BoxTitle, BoxImage } from '../Styles/Home'
=======
import React, { useEffect, useState } from 'react';
import { RequestOptions } from '../../../utils/index';
import { Section, Box, BoxTitle } from './HomeStyle.js';
>>>>>>> 4dfb4040dffde7bea0bc25e4fbfc3a0d203a0aed:src/Components/Pages/Home/Manga.js

const Manga = () => {
	const [manga, setManga] = useState([]);
	const { General: MangaRequest } = RequestOptions;

	const renderManga = () => {
		return manga?.map((box, index) => (
			<div key={index}>
				<BoxTitle key={box.title}>{box.titles.english}</BoxTitle>
				<Box key={box.id} bgColor={box.bgColor}>
					<img src={box.images.medium} alt='Trending Anime' />
				</Box>
			</div>
		));
	};

	useEffect(() => {
		(async () => {
			MangaRequest('manga', 5, data => {
				setManga(data);
			});
		})();
	}, []);

	return <Section>{renderManga()}</Section>;
};

export default Manga;
