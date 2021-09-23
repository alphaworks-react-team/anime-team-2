import React from 'react';
import styled from 'styled-components';
import { px2vw } from '../../utils';
import Search from '../Pages/Search/Search';
const NavStyle = styled.div`
	height: ${px2vw(32, 320)};
	width: 100vw;
	display: flex;
	background-color: green;
	@media (min-width: 1024px) {
		min-width: 100%;
	}
`;
const Navbar = () => {
	return (
		<>
			<NavStyle>
				<Search />
			</NavStyle>
		</>
	);
};

export default Navbar;
