import React from 'react';
import { StyledMenu, Avater, Container, AvaterName } from './menu.styled';
import { Link } from 'react-router-dom';

export const Menu = ({ open }) => {
	return (
		<StyledMenu open={open}>
			<Container>
				<AvaterName>olorunwa lawrence</AvaterName>
			</Container>
			<Link to="/dashboard">Dashboard</Link>
			<Link to="/profile">Create Account</Link>
			<Link to="/account">View Profile</Link>
			<Link to="/account">Transaction History</Link>
		</StyledMenu>
	);
};
export default Menu;
