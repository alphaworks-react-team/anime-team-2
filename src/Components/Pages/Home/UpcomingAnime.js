import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { RequestOptions } from '../../../utils/index';
import { Box, BoxImage, BoxText, BoxTitle, Section } from './HomeStyle';

const UpcomingAnime = () => {
	const [upcomingAnime, setUpcomingAnime] = useState([]);
	const { Filter: UpcomingRequest } = RequestOptions;

	useEffect(() => {
		(async () => {
			UpcomingRequest('anime', 'status', 'upcoming', 5, data => {
				setUpcomingAnime(data);
			});
		})();
	}, []);

	const renderUpcoming = () => {
		return upcomingAnime?.map((box, index) => {
			return (
				<Section key={index}>
					<div>
						<BoxTitle key={box.title}>{box.titles.english}</BoxTitle>
						<Box key={box.id} bgColor={box.bgColor}>
							<BoxImage src={box.images.small} />
						</Box>
					</div>
				</Section>
			);
		});
	};

	return (
		<div>
			<h1 style={{ paddingLeft: '16px', paddingTop: '40px' }}>
				Upcoming Anime
			</h1>

			<Section>{renderUpcoming()}</Section>
		</div>
	);
};

export default UpcomingAnime;
