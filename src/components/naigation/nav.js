import React from 'react';
import * as Nav from './nav.style';

export const Navigation = () => {
	return (
		<Nav.Container>
			<Nav.Wrapper>
				<Nav.Div color="#fff" flex="2" font-size="19px">
					Banka
				</Nav.Div>
				<Nav.Nav>
					<Nav.LI>Home</Nav.LI>
					<Nav.LI>hellon</Nav.LI>
					<Nav.LI>Features</Nav.LI>
					<Nav.LI>Convert</Nav.LI>
					<Nav.LI>About us</Nav.LI>
				</Nav.Nav>
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

			<Nav.envilop gradient="linear-gradient(0deg, #f3c400 0%, #f88845 100%)" width="60%" margin="1px auto">
				{' '}
				hello
			</Nav.envilop>
		</Nav.Container>
	);
};
