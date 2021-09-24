import styled from 'styled-components';

const Button = styled.button`
	width: 2rem;
	height: 2rem;
	/* position: absolute; */
	left: 12.75rem;
	background-color: ${props => props.bgColor};
	color: ${props => props.color};
	font-size: ${props => props.size};
	padding: 3.5px;
	font-weight: 700;
	border-radius: 0.4rem;
	border: none;
	transition: transform 0.1s ease-in;
	cursor: pointer;
	&:hover {
		background-color: ${props => props.hbgColor};
		transform: scale(1.02);
	}
`;

export default Button;
