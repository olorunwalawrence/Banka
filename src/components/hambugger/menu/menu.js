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
			<Link to="/acoount">Create Account</Link>
			<Link to="/profile">View Profile</Link>
			<Link to="/transactions">Transaction History</Link>
			<Link to="/">Home</Link>
		</StyledMenu>
	);
};
export default Menu;
