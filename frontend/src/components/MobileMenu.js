import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components/macro';
import { menuData } from '../data/MenuData';
import { Button } from './Button';
import { Logo } from '../components/Navbar/NavbarElements';

const MobileMenuContainer = styled.div`
	position: fixed;
	z-index: 999;
	width: 100%;
	height: 100%;
	background: #000;
	display: grid;
	align-items: center;
	top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
	left: 0;
	transition: 0.3s ease-in-out;
	opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
`;

const MobileMenuWrapper = styled.div``;
const MobileMenuList = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: repeat(4, 80px);
	text-align: center;
	margin-bottom: 4rem;

	@media screen and (max-width: 600px) {
		grid-template-rows: repeat(4, 60px);
	}
`;
const MobileMenuLink = styled(Link)`
	display: flex;
	color: #fff;
	align-items: center;
	justify-content: center;
	font-size: 1.5rem;
	text-decoration: none;
	list-style: none;
	cursor: pointer;
	transition: 0.2s ease-in-out;
	&:hover {
		color: #ccc;
	}
`;

const Icon = styled.div`
	position: absolute;
	top: 1.2rem;
	right: 1.5rem;
	background: transparent;
	font-size: 2rem;
	cursor: pointer;
	outline: none;
`;
const CloseIcon = styled(FaTimes)`
	color: #fff;
	background: linear-gradient(90deg, #fe5a36 0%, #f61d73 100%);
`;
const BtnWrap = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

const MobileMenu = ({ isOpen, toggle }) => {
	return (
		<MobileMenuContainer isOpen={isOpen} onClick={toggle}>
			<Icon onClick={toggle}>
				<CloseIcon />
			</Icon>
			<MobileMenuWrapper>
				<MobileMenuList>
					{menuData.map((item, index) => (
						<MobileMenuLink to={item.link} key={index}>
							{item.title}
						</MobileMenuLink>
					))}
				</MobileMenuList>
				<BtnWrap>
					<Button primary='true' round='true' big='true' to='/sign-up'>
						Sign Up
					</Button>
				</BtnWrap>
			</MobileMenuWrapper>
		</MobileMenuContainer>
	);
};

export default MobileMenu;
