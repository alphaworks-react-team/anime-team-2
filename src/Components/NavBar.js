import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Links, Routes } from './fragments/Nav/index';
import { SearchBar } from './index';
import styled from 'styled-components';

const Container = styled.nav`
	display: flex;
	position: absolute;
	justify-content: center;
	align-items: center;
	gap: 1rem;
	height: 10vh;
	width: 100vw;
	background-color: slateblue;
	color: slategray;
`;

const NavBar = () => {
	return (
		<>
			<BrowserRouter>
				<Container>
					{Links()}
					<SearchBar />
				</Container>
				{Routes()}
			</BrowserRouter>
		</>
	);
};

export default NavBar;
