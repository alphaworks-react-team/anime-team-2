import React from 'react';
import { TopSection, TopMain, TopLeft, TopContainer, ColBox, SubBox } from './HomeStyle.js';

export default function TopAnime({ topTen }) {
	return (
		<TopContainer>
			{topTen.map((info, index) => (
				<TopSection>
					<TopLeft>
					</TopLeft>
					<TopMain>
						<ColBox>
							<SubBox>SubBox</SubBox>
							<SubBox>SubBox</SubBox>
						</ColBox>
						<ColBox>
							<SubBox>SubBox</SubBox>
							<SubBox>SubBox</SubBox>
						</ColBox>
						<ColBox>
							<SubBox>SubBox</SubBox>
							<SubBox>SubBox</SubBox>
						</ColBox>
					</TopMain>
				</TopSection>
			))}
		</TopContainer>
	);
}
