import React from 'react';
import * as Nav from './nav.style';
import Scrollspy from 'react-scrollspy';
import { Link } from 'react-router-dom';

export const Navigation = ({ id }) => {
	return (
		<Nav.Container id={id}>
			<Nav.Wrapper>
				<Nav.Div color="#fff" flex="2" font-size="19px" paddingTop="20px" background="rgba(4, 9, 30, 0.85)">
					<Nav.Bannerlogo src={require('../../asset/images/borrowit.png')} />
				</Nav.Div>

				<Scrollspy items={['sec_1', '/sect_2', 'sec_3', 'sec_4', 'sec_5']} currentClassName="is-current">
					<Nav.Nav>
						<Nav.LI>
							<Nav.link href="#sec_1">Home</Nav.link>
						</Nav.LI>
						<Nav.LI>
							<Nav.link href="#/sec_2">Login</Nav.link>
						</Nav.LI>
						<Nav.LI>
							<Nav.link href="#sec_3">Features</Nav.link>
						</Nav.LI>
						<Nav.LI>
							<Nav.link href="#sec_4">About us</Nav.link>
						</Nav.LI>
						<Nav.LI>
							<Link to="/signup">Sign up</Link>
						</Nav.LI>
						<Nav.LI>
							<Link to="/dashboard">Dashboard</Link>
						</Nav.LI>
					</Nav.Nav>
				</Scrollspy>
			</Nav.Wrapper>
		</Nav.Container>
	);
};
