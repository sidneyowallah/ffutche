import React from 'react';
import { menuData } from '../../data/MenuData';
import { Button } from '../Button';
import { Nav, NavLink, NavMenu, NavBtn, NavBtnLink, MenuBars, Logo } from './NavbarElements';

const Navbar = ({ toggle }) => {
	return (
		<Nav>
			<Logo to='/' />
			<MenuBars onClick={toggle} />
			<NavMenu>
				{menuData.map((item, index) => (
					<NavLink to={item.link} key={index}>
						{item.title}
					</NavLink>
				))}
			</NavMenu>
			<NavBtn>
				<Button to='/sign-up' primary='true'>
					Register
				</Button>
			</NavBtn>
		</Nav>
	);
};

export default Navbar;
