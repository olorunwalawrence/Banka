import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { StyledMenu, Avater, Container, AvaterName } from './menu.styled';
import { Link } from 'react-router-dom';

export const Menu = ({ open }) => {
	const [logout, setLogout] = useState(false);

	const history = useHistory();

	const signOut = e => {
		e.preventDefault();
		localStorage.clear('jwtToken');

		setLogout(true);
		history.push('/');
	};
	return (
		<StyledMenu open={open}>
			<Container>
				<AvaterName>olorunwa lawrence</AvaterName>
			</Container>
			<Link to="/dashboard">Dashboard</Link>
			<Link to="/acoount">Create Account</Link>
			<Link to="/profile">View Profile</Link>
			<Link to="/transactions">Transaction History</Link>
			<Link onClick={signOut}>Logout</Link>
		</StyledMenu>
	);
};
export default Menu;
