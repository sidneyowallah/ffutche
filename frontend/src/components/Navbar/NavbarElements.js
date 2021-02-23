import styled from 'styled-components';
// import { NavLink as Link } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import logoImg from '../../img/logo-2.png';

export const Logo = styled(Link)`
	width: 50%;
	height: 100px;
	margin-right: 20px;
	background: url(${logoImg});
	background-repeat: no-repeat;
	background-size: contain, cover;
	background-position: center;
`;

export const Nav = styled.nav`
	background: var(--clr-nav);
	height: 100px;
	display: flex;
	justify-content: flex-start;
	padding: 0.5rem calc((80vw - 1000px) / 2);
	z-index: 10;
	border-bottom: 1px solid #d8caba;
`;

export const NavLink = styled(Link)`
	color: rgb(44, 28, 20);
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0 1rem;
	height: 100%auto;
	cursor: pointer;
	font-family: var(--nav-font);
	font-size: 1.5rem;
	font-weight: 700;

	&.active {
		color: rgb(224, 78, 30);
	}
`;

export const MenuBars = styled(FaBars)`
	display: none;
	color: rgb(44, 28, 20);

	@media screen and (max-width: 600px) {
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(-100%, 75%);
		font-size: 1.8rem;
		cursor: pointer;
	}
`;

export const NavMenu = styled.div`
	display: flex;
	align-items: center;
	width: 100vw;
	white-space: nowrap;

	@media screen and (max-width: 600px) {
		display: none;
	}
`;

export const NavBtn = styled.nav`
	display: flex;
	align-items: center;
	margin-right: 24px;
	justify-content: flex-end;
	width: 100vw;

	@media screen and (max-width: 600px) {
		display: none;
	}
`;

export const NavBtnLink = styled(Link)`
	border-radius: 4px;
	background: #256ce1;
	padding: 10px 22px;
	color: #fff;
	border: none;
	outline: none;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	text-decoration: none;
	&:hover {
		transition: all 0.2s ease-in-out;
		background: #fff;
		color: #010606;
	}
`;
