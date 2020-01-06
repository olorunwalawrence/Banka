import styled from 'styled-components';

export const Container = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
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
	&:hover {
		background: ${props => props.hoverBg};
		color: ${props => props.hoverColor};
		border: ${props => props.hoverBorder};
	}
`;
export const Wrapper = styled.div`
	display: flex;
	background-color: transparent;
	height: 100px;
	padding-top: 1rem;
	width: 85%;
	margin: 1px auto;
`;
export const Div = styled.div`
	color: ${props => props.color};
	flex: ${props => props.flex};
	font-size: ${props => props.fontSize};
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
