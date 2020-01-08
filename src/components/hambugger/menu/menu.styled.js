import styled from 'styled-components';

export const Avater = styled.div`
	height: 100px;
	width: 100px;
	border-radius: 100px;
	background: #fff;
`;
export const AvaterName = styled.p`
	color: white;
	font-size: 14px;
	text-align: center;
`;
export const Container = styled.div``;

export const StyledMenu = styled.nav`
	display: flex;
	flex-direction: column;
	/* justify-content: center; */
	padding-top: 100px;
	background: ${({ theme }) => theme.primaryDark};
	height: 100vh;
	align-items: center;
	padding: 1rem;
	position: absolute;
	top: 70px;
	left: 0;
	width: 20%;
	font-size: 1.5rem;
	transition: transform 0.3s ease-in-out;
	/* transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')}; */

	@media only screen and (max-width: ${({ theme }) => theme.mobile}) {
		width: 30%;
	}

	a {
		font-size: 0.9rem;
		text-transform: capitalize;
		padding-top: 50px;
		/* padding: 0.5rem 0; */
		font-weight: small;
		letter-spacing: 0.1rem;
		color: ${({ theme }) => theme.primaryLight};
		text-decoration: none;
		transition: color 0.3s linear;

		&:hover {
			color: ${({ theme }) => theme.secondaryHover};
		}
	}
`;
