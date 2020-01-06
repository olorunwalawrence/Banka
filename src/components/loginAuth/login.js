import React from 'react';
import * as LG from './login.style';

export const LoginAuth = ({ id }) => {
	return (
		<LG.LoginContainer id={id}>
			<LG.formWrapper>
				<LG.loginHeader>Banka Login Form</LG.loginHeader>

				<LG.Para>Who are in extremely love with eco friendly system.</LG.Para>
				<LG.Form>
					<LG.input type="email" placeholder="Email"></LG.input>
					<LG.input type="password" placeholder="password"></LG.input>
					<LG.Btn>Login</LG.Btn>
				</LG.Form>
			</LG.formWrapper>
		</LG.LoginContainer>
	);
};
