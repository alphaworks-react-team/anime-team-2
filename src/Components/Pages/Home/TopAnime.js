import React, { useEffect, useState } from 'react';
import {
	TopSection,
	TopMain,
	TopLeft,
	TopTitle,
	TopContainer,
	RowBox,
	ColBox,
	SubBox,
	TopImage,
} from './HomeStyle.js';
import { RequestOptions } from '../../../utils/index';

export default function TopAnime() {
	const [topAnime, setTopAnime] = useState([]);
	const { Sort: TopAnimeRequest } = RequestOptions;

	useEffect(() => {
		(async () => {
			TopAnimeRequest('anime', 'averageRating', data => {
				setTopAnime(data);
			});
		})();
	}, []);

	const renderTopAnime = () => {
		return topAnime?.map((anime, index) => (
			<TopSection key={index}>
				<TopLeft>
					<RowBox style={{ display: 'flex', alignItems: 'center' }}>
						<SubBox>
							<TopImage
								alt={`Top Anime: ${anime.title}`}
								style={{
									display: 'flex',
									justifyContent: 'center',
									height: '3rem',
									width: '1.5rem',
								}}
								src={anime.images.tiny}
							/>
						</SubBox>
						<SubBox
							style={{
								display: 'flex',
								alignSelf: 'flex-start',
								margin: '32px',
							}}
						>
							<TopTitle>Title{anime.title}</TopTitle>
						</SubBox>
					</RowBox>
				</TopLeft>
				<TopMain>
					<ColBox>
						<SubBox>
							Rated:{anime.reviews.userPopularity.approvalPercent}
						</SubBox>
						<SubBox>Rank:{anime.reviews.userPopularity.rank}</SubBox>
					</ColBox>
					<ColBox>
						<SubBox>{anime.generalInfo.mediaType}</SubBox>
						<SubBox>{anime.episodeInfo.lengthInMinutes}</SubBox>
					</ColBox>
					<ColBox>
						<SubBox>{anime.generalInfo.startDate}</SubBox>
						<SubBox>{anime.generalInfo.status}</SubBox>
					</ColBox>
				</TopMain>
			</TopSection>
		));
	};

	return (
		<div>
			<h1 style={{ paddingLeft: '16px', paddingTop: '40px' }}>TopAnime</h1>
			<TopContainer>{renderTopAnime()}</TopContainer>;
		</div>
	);
}
