import React from 'react';
import styled from 'styled-components';
import { Section } from '../Home/HomeStyle';
import { StyledGrid, GridBox } from './GridStyle';

// const Title = styled.h2`
// 	font-size: 25px;
// 	font-weight: 500;
// 	color: #ffff;
// `;

// const iconStyles = {
// 	position: 'absolute',
// 	transform: 'translateY(-45px)',
// 	display: 'flex',
// 	alignSelf: 'flex-start',
// 	paddingLeft: '87%',
// };

const Grid = () => {
	// const iconStyles = {
	// 	position: 'absolute',
	// 	transform: 'translateY(-45px)',
	// 	display: 'flex',
	// };

	return (
		<div>
			<Section>
				<StyledGrid>
					<GridBox bgColor='blue'></GridBox>
				</StyledGrid>
			</Section>
		</div>
	);
};

export default Grid;
