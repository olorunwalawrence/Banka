import styled from 'styled-components';

export const LoginContainer = styled.div`
	position: relative;
	top: -100px;
`;

export const formWrapper = styled.div`
	background: linear-gradient(0deg, #f3c400 0%, #f88845 100%);
	width: 85%;
	margin: 0px auto;
	height: 70vh;
`;
export const loginHeader = styled.h1`
	color: white;
	text-align: center;
	padding-top: 4rem;
`;
export const Form = styled.form`
	width: 50%;
	margin: 0px auto;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	background-color: inherit;
`;
export const inputWrapper = styled.div`
	height: auto;
	width: 50%;
	display: flex;
	justify-content: center;
`;
export const input = styled.input`
	padding: 20px;
	border: none;
	width: 100%;
	margin-top: 10px;
`;
export const Btn = styled.button`
	padding: 18px;
	margin-top: 20px;
	border: none;
	border-radius: 30px;
	width: 250px;
	align-self: flex-end;
`;
export const Para = styled.p`
	text-align: center;
	color: white;
`;
