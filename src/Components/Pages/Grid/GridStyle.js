import styled from 'styled-components';
import { px2vw } from '../../../utils';

export const StyledGrid = styled.div`
	display: grid;
	line-height: 2;
	-webkit-column-count: 4;
	-webkit-column-gap: 10px;
	-moz-column-count: 4;
	-moz-column-gap: 10px;
	column-count: 4;
	column-gap: 10px;
`;
export const GridBox = styled.div`
	width: 100px;
	height: 100px;
	background-color: ${props => props.bgColor};
	box-shadow: 1px 15px 25px -5px rgba(0, 0, 0, 0.08);
	-webkit-box-shadow: 1px 15px 25px -5px rgba(0, 0, 0, 0.08);
	-moz-box-shadow: 1px 15px 25px -5px rgba(0, 0, 0, 0.08);
`;
export const StyledSearch = styled.div`
	position: relative;
	width: 100%;
	height: auto;
	:hover {
		cursor: pointer;
	}
`;
