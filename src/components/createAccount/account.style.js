import styled from 'styled-components';

export const Container = styled.div``;

export const wrapper = styled.div`
	display: flex;
`;

export const LeftSideBar = styled.div`
	flex: 0.5;
	height: 100vh;
	background: #0d0c1d;
`;

export const RightSection = styled.div`
	flex: 2;
	background: #f5f7f9;
	height: auto;
`;

export const Para = styled.p``;
export const Divs = styled.div`
	text-transform: capitalize;
	padding-left: 1.5rem;
	font-size: 20px;
	border-bottom: 1px solid #ccc;
	margin: 10px;
`;

export const FormContainer = styled.div`
	width: 80%;
	margin: 0px auto;
	padding-top: 30px;
	background: #fff;
	height: auto;
	margin-top: 30px;
	margin-bottom: 60px;
`;
export const formWrapper = styled.div``;

export const Form = styled.form``;

export const Div = styled.div`
	margin-top: ${props => props.marginTop};
	padding: ${props => props.padding};
	width: ${props => props.width};
	height: ${props => props.height};
	margin-left: ${props => props.marginleft};
	margin: ${props => props.margin};
	background: ${props => props.background};
	text-align: ${props => props.align};
	font-size: ${props => props.size};
	margin-bottom: ${props => props.marginBottom};
	color: ${props => props.color};
`;
export const FormRow = styled.div``;

export const formGroup = styled.div``;

export const label = styled.label``;

export const Button = styled.button`
	width: ${props => props.width};
	background: ${props => props.background};
	color: ${props => props.color};
	font-weight: ${props => props.fontWeight};
	padding: ${props => props.padding};
	text-align: ${props => props.align};
	border: ${props => props.border};
	height: ${props => props.height};
	font-size: ${props => props.size};
	margin-bottom: ${props => props.marginbottom};
	@media (max-width: 450px) {
		width: 100%;
		font-size: 17px;
		margin-top: 10px;
	}
`;

export const Input = styled.input`
	padding: ${props => props.padding};
	width: ${props => props.width};
	border: ${props => props.border};
	@media (max-width: 450px) {
		width: 100%;
		padding-bottom: 10px;
	}
`;
