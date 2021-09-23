import styled from 'styled-components';
import px2vw from '../../../utils/px2vw';

export const Section = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin: ${px2vw(16)};
	max-width: 100%;
	max-height: 100%;
	padding: ${px2vw(16)};

	@media (min-width: 1024px) {
		flex-wrap: nowrap;
	}
	@media (min-width: 768px) {
		justify-content: flex-start;
	}
`;

export const Box = styled.div`
	display: flex;
	min-width: ${px2vw(160)};
	min-height: ${px2vw(200, 320)};
	flex-direction: column;
	border: 0;
	background-color: ${props => props.bgColor};
	/* height: 100%; */
	border-radius: 5px;
	box-shadow: 1px 15px 25px -5px rgba(0, 0, 0, 0.08);
	-webkit-box-shadow: 1px 15px 25px -5px rgba(0, 0, 0, 0.08);
	-moz-box-shadow: 1px 15px 25px -5px rgba(0, 0, 0, 0.08);

	@media (min-width: 425px) {
		width: ${px2vw(320, 768)};
		min-height: ${px2vw(320, 768)};
		height: 100%;
	}
	@media (min-width: 768px) {
		width: ${px2vw(160, 768)};
		min-height: ${px2vw(200, 768)};
		height: 100%;
	}
`;
export const BoxImage = styled.image`
	width: 100%;
	height: 100%;
	object-fit: fill;
`;

export const BoxTitle = styled.div`
	color: #333333;
	background-color: #edf1f5;
	white-space: white-space;
	overflow: hidden;
	text-overflow: ellipsis;
	@media (min-width: 425px) {
		width: ${px2vw(320, 768)};
		height: ${px2vw(50)};
	}
	@media (min-width: 768px) {
		width: ${px2vw(220)};
		height: ${px2vw(30)};
	}

	@media (min-width: 1024px) {
		width: ${px2vw(220)};
		height: ${px2vw(30)};
	}
`;

export const BoxText = styled.p`
	margin-top: ${px2vw(20)};
	color: #666;
	font-size: 1.5rem;

	@media (min-width: 1024px) {
		font-size: 1rem;
	}
`;
export const TopContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	min-height: ${px2vw(1500)};
`;

export const TopSection = styled.div`
	display: flex;
	flex-flow: row;
	margin: ${px2vw(32)};
	max-width: 100%;
	min-height: ${px2vw(80)};
	border-radius: 3px;
	box-shadow: 1px 15px 25px -5px rgba(0, 0, 0, 0.05);
	-webkit-box-shadow: 1px 15px 25px -5px rgba(0, 0, 0, 0.05);
	-moz-box-shadow: 1px 15px 25px -5px rgba(0, 0, 0, 0.05);
`;

export const TopLeft = styled.div`
	flex: 8;
	background-color: #fbfbfb;
	border-top-left-radius: 3px;
	border-bottom-left-radius: 3px;
`;

export const TopMain = styled.div`
	background-color: #fbfbfb;
	display: flex;

	flex: 4;
	text-align: left;
	font-weight: 600;
	border-top-right-radius: 3px;
	border-bottom-right-radius: 3px;
`;

export const ColBox = styled.div`
	display: flex;
	flex-flow: column;
	justify-content: center;
	height: 100%;
	margin-left: 6px;
	background-color: #fbfbfb;
`;
export const SubBox = styled.div`
	height: 30%;
	margin: 2px;
	background-color: #fbfbfb;
`;
