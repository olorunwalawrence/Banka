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
						<Nav.LI>
							<Nav.link href="#sec_5">Home</Nav.link>
						</Nav.LI>
					</Nav.Nav>
				</Scrollspy>
			</Nav.Wrapper>
			<Nav.envilop display="flex" justifyContent="center">
				<Nav.bannerContent>
					<Nav.SmallHeader>The best bank you can transact with.</Nav.SmallHeader>
					<Nav.header>Banka</Nav.header>
					<Nav.Para>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temp or incididunt ut
						labore et dolore magna aliqua. Ut enim ad minim.
					</Nav.Para>
					<Nav.envilop
						hoverBg="transparent"
						hoverBorder="2px solid white	"
						hoverColor="white"
						paddingTop=".7rem"
						width="35%"
						height="3rem"
						Radius=".2rem"
						gradient="linear-gradient(0deg, #f3c400 0%, #f88845 100%)"
					>
						Get Started
					</Nav.envilop>
				</Nav.bannerContent>
			</Nav.envilop>
		</Nav.Container>
	);
};
