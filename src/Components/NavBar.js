import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Links, Routes } from './fragments/Nav/index';
import { SearchBar } from './index';
import styled from 'styled-components';
<<<<<<< HEAD

const Container = styled.nav`
	display: flex;
	position: absolute;
	justify-content: center;
	align-items: center;
	gap: 1rem;
	height: 10vh;
=======
import { px2vw } from '../utils/index';
const Container = styled.nav`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1rem;
	/* height: 10vh; */
>>>>>>> 4dfb4040dffde7bea0bc25e4fbfc3a0d203a0aed
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
