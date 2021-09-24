import styled from 'styled-components';
import px2vw from '../../../utils/px2vw';

export const Section = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin: ${px2vw(8)};
	max-width: 100%;
	max-height: 100%;
	padding: ${px2vw(8)};

	@media (min-width: 1024px) {
		flex-wrap: nowrap;
	}
	@media (min-width: 768px) {
		justify-content: flex-start;
	}
`;

export const Box = styled.div`
	display: flex;
	justify-content: center;

	flex-direction: column;
	border: 0;
	background-color: ${props => props.bgColor};
	height: 100%;
	border-radius: 5px;
	box-shadow: 1px 15px 25px -5px rgba(0, 0, 0, 0.08);
	-webkit-box-shadow: 1px 15px 25px -5px rgba(0, 0, 0, 0.08);
	-moz-box-shadow: 1px 15px 25px -5px rgba(0, 0, 0, 0.08);

	@media (min-width: 425px) {
		width: 360px;
		height: 320px;
		height: 100%;
	}
	@media (min-width: 768px) {
		width: 160px;
		height: 200px;
		height: 100%;
	}
	@media (min-width: 1024px) {
		width: 160px;
		height: 200px;
		height: 100%;
	}
`;
export const BoxImage = styled.img`
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
	align-content: center;
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
	box-shadow: 1px 15px 25px -5px rgba(0, 0, 0, 0.08);
	-webkit-box-shadow: 1px 15px 25px -5px rgba(0, 0, 0, 0.08);
	-moz-box-shadow: 1px 15px 25px -5px rgba(0, 0, 0, 0.08);

	@media (min-width: 425px) {
		flex: 4;
		height: 120px;
	}
	@media (min-width: 768px) {
		width: 80%;
		height: 120px;
	}

	@media (min-width: 1024px) {
		width: 80%;
		height: 120px;
	}
`;
export const TopTitle = styled.div`
	color: black;

	background-color: #fbfbfb;
`;
export const TopMain = styled.div`
	background-color: #fbfbfb;
	display: flex;

	flex: 4;
	text-align: center;
	font-weight: 600;
	border-top-right-radius: 3px;
	border-bottom-right-radius: 3px;
`;

export const ColBox = styled.div`
	display: flex;
	flex-flow: column;
	justify-content: center;
	width: 100%;
	height: 100%;
	margin-left: 6px;
	background-color: #fbfbfb;
`;
export const RowBox = styled.div`
	display: flex;
	height: 100%;
	margin-left: 6px;
	background-color: #fbfbfb;
`;
export const SubBox = styled.div`
	height: 30%;
	margin: 2px;
	background-color: #fbfbfb;
`;
export const TopImage = styled.img`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	object-fit: fill;
`;
