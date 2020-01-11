import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Toastr from 'toastr';
import { Spinner } from '../../utils/spinner';
import * as SA from '../signup/signup.style';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { LoginUserAuth } from '../../store/actions/loginAction';

import * as LG from './login.style';

export const LoginAuth = ({ id }) => {
	const [login, setLogin] = useState({});
	const dispatch = useDispatch();
	const history = useHistory();
	const handleChange = e => setLogin({ ...login, [e.target.name]: e.target.value });
	// set loading
	const loading = useSelector(state => state.loginReducer.loading);
	// react hook form
	const { register, handleSubmit, errors } = useForm();

	useEffect(() => {
		const token = localStorage.getItem('jwtToken');
		if (token) {
			history.push('/dashboard');
		}
	}, [history]);

	const handleSubmits = e => {
		// e.preventDefault();
		dispatch(LoginUserAuth(login, history));
	};
	return (
		<LG.LoginContainer id={id}>
			<SA.spinnerWrapper>{loading && <Spinner />}</SA.spinnerWrapper>
			<LG.formWrapper>
				<LG.loginHeader>Banka Login Form</LG.loginHeader>

				<LG.Para>Who are in extremely love with eco friendly system.</LG.Para>
				<LG.Form>
					<LG.input
						type="email"
						onChange={handleChange}
						name="email"
						placeholder="Email"
						ref={register({
							required: 'Required',
							pattern: {
								value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
								message: 'invalid email address',
							},
						})}
					/>
					{errors.email && <SA.error>{errors.email.message}</SA.error>}
					<LG.input
						ref={register({ required: true, maxLength: 8 })}
						type="password"
						onChange={handleChange}
						name="password"
						placeholder="password"
					/>
					{errors.password && <SA.error>password is required</SA.error>}
					<LG.Btn onClick={handleSubmit(handleSubmits)}>Login</LG.Btn>
				</LG.Form>
			</LG.formWrapper>
		</LG.LoginContainer>
	);
};
