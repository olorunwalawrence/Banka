import React from 'react';
import * as Nav from './nav.style';
import Scrollspy from 'react-scrollspy';

export const Navigation = ({ id }) => {
	return (
		<Nav.Container id={id}>
			<Nav.Wrapper>
				<Nav.Div color="#fff" flex="2" font-size="19px">
					Banka
				</Nav.Div>

				<Scrollspy
					// scrollTargetIds
					items={['sec_1', 'sect_2', 'sec_3', 'sec_4', 'sec_5']}
					// offset={100}
					// activeNavClass="is-active"
					// scrollDuration="1000"
					// headerBackground="true"
					currentClassName="is-current"
				>
					<Nav.Nav>
						<Nav.LI>
							<Nav.link href="#sec_1">Home</Nav.link>
						</Nav.LI>
						<Nav.LI>
							<Nav.link href="#sec_2">Login</Nav.link>
						</Nav.LI>
						<Nav.LI>
							<Nav.link href="#sec_3">Features</Nav.link>
						</Nav.LI>
						<Nav.LI>
							<Nav.link href="#sec_4">About us</Nav.link>
						</Nav.LI>
					</Nav.Nav>
				</Scrollspy>
			</Nav.Wrapper>
		</Nav.Container>
	);
};
