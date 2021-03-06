import React from 'react';
import styled from 'styled-components';
import { px2vw } from '../../utils/index';

export const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	position: absolute;
	justify-content: center;
	flex-direction: column;
	/* align-items: center; */
	margin: ${px2vw(32)};
	max-width: 100%;
	max-height: 90%;
	z-index: -1;
	@media (min-width: 1024px) {
		flex-wrap: nowrap;
	}
	@media (min-width: 768px) {
		justify-content: flex-start;
	}
`;

const PageContainer = ({ children }) => {
	return <Container>{children}</Container>;
};

export default PageContainer;
