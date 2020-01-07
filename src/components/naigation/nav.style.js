import styled from 'styled-components';

export const Container = styled.div`
	position: sticky;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 2;
	background: #777777;
	opacity: 0.7;
`;
export const Bannerlogo = styled.img`
	margin-top: -30px;
`;
export const envilop = styled.div`
	margin: ${props => props.margin};
	display: ${props => props.display};
	justify-content: ${props => props.justifyContent};
	width: ${props => props.width};
	border-radius: ${props => props.Radius};
	height: ${props => props.height};
	background: ${props => props.gradient};
	display: ${props => props.display};
	padding-top: ${props => props.paddingTop};
	position: ${props => props.position};
	top: ${props => props.top};
	z-index: ${props => props.index};
	&:hover {
		background: ${props => props.hoverBg};
		color: ${props => props.hoverColor};
		border: ${props => props.hoverBorder};
	}
`;
export const Wrapper = styled.div`
	display: flex;
	background-color: #777777;
	height: 100px;
	padding-top: 1rem;
	width: 85%;
	margin: 1px auto;
	position: sticky;
	top: 0px;
	z-index: 3;
`;
export const Div = styled.div`
	color: ${props => props.color};
	flex: ${props => props.flex};
	font-size: ${props => props.fontSize};
	padding-top: ${props => props.paddingTop};
`;
export const Nav = styled.nav`
	color: white;
	display: flex;
	flex: 1;
	font-size: 13px;
`;
export const LI = styled.li`
	list-style: none;
	padding-right: 20px;
	text-transform: uppercase;
	cursor: pointer;
`;

export const bannerContent = styled.div`
	height: auto;
	width: 40%;
	background-color: transparent;
	color: white;
	text-align: center;
	padding-top: 4rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	z-index: 5;
`;

export const Para = styled.p`
	margin: 1.5rem;
`;
export const SmallHeader = styled.h4`
	font-size: 1.2rem;
	text-transform: capitalize;
`;
export const header = styled.h1`
	margin: 0px;
`;

export const link = styled.a`
	color: white;
`;
