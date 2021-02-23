import React from 'react';
import { menuData } from '../../data/MenuData';
import { Button } from '../Button';
import { Nav, NavLink, NavMenu, NavBtn, NavBtnLink, MenuBars, Logo } from './FooterElements';

const Footer = ({ toggle }) => {
	return (
		<Nav>
			<Logo to='/' />
			<NavMenu>
				{menuData.map((item, index) => (
					<NavLink to={item.link} key={index}>
						{item.title}
					</NavLink>
				))}
			</NavMenu>
		</Nav>
	);
};

export default Footer;
