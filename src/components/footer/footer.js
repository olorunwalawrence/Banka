import React from 'react';
import * as FT from './footer.style';

export const Footer = ({ id }) => {
	let date = new Date();
	return (
		<FT.footerContainer id={id}>
			<FT.footerWrapper>
				<FT.aboutUs>
					<FT.Header>About Us</FT.Header>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
					dolore magna aliqua.
				</FT.aboutUs>

				<FT.TopProduct>
					<FT.Header>Top Products</FT.Header>
					<FT.li>Managed Website</FT.li>
					<FT.li>Managed Reputation</FT.li>
					<FT.li>Managed Tools</FT.li>
					<FT.li>Managed Service</FT.li>
				</FT.TopProduct>

				<FT.newsLetter>
					<FT.Header>Newsletter</FT.Header>
					<FT.Para>You can trust us. we only send offers, not a single spam.</FT.Para>
					<FT.Input type="email" placeholder="Email Address" />
					<FT.Button>Submit</FT.Button>
				</FT.newsLetter>
			</FT.footerWrapper>
			<FT.LittleContainer>
				<FT.littleFooter>
					{' '}
					<FT.Para>&copy;{date.getFullYear()} All right reserved | Designed by Olorunwa Lawrence</FT.Para>
				</FT.littleFooter>
			</FT.LittleContainer>
		</FT.footerContainer>
	);
};
