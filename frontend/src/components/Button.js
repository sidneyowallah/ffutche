import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Button = styled(Link)`
	display: flex;
	justify-content: center;
	align-items: center;
	max-width: 150px;
	max-width: 250px;
	height: 50px;
	outline: none;
	border: none;
	text-decoration: none;
	white-space: nowrap;
	border-radius: 4px;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	font-size: ${({ big }) => (big ? '1.2rem' : '1rem')};
	color: ${({ primary }) => (primary ? '#fff' : '#000d1a')};
	padding: ${({ big }) => (big ? '16px 40px' : '10px 22px')};
	margin: ${({ margin }) => (margin ? '20px 0px' : 'none')};
	background: ${({ primary }) =>
		primary ? 'linear-gradient(90deg, #FE5A36 0%, #F61D73 100%)' : 'linear-gradient(90deg, #F61D73 0%, #FE5A36 100%)'};

	&:hover {
		transition: all 0.2s ease-in-out;
		transform: translateY(-2px);
		color: #fff;
		background: ${({ primary }) =>
			primary
				? 'linear-gradient(90deg, #F61D73 0%, #FE5A36 100%)'
				: 'linear-gradient(90deg, #FE5A36 0%, #F61D73 100%)'};
	}
`;
