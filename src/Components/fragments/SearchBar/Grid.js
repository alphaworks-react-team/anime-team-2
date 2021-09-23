import styled from 'styled-components';
import px2vw from '../../../utils/px2vw';

export const GridItem = styled.div`
	height: ${px2vw(550)};
	flex-basis: 20%;
	-ms-flex: auto;
	width: ${px2vw(259)};
	position: relative;
	padding: ${px2vw(10)};
	box-sizing: border-box;
	@media (max-width: 1024px) {
		.grid-item {
			flex-basis: 33.33%;
		}
	}
	@media (max-width: 768px) {
		.grid-item {
			flex-basis: 50%;
		}
	}
	/* @media(max-width: 555px) {
  .grid-item {
    flex-basis: 100%;
  } */
`;
