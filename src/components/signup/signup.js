import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Toastr from 'toastr';
import { useHistory } from 'react-router-dom';
import * as SA from './signup.style';
import { Link } from 'react-router-dom';
import { Particle } from '../particles/particle';
import registerUser from '../../store/actions/authActions';
import { useForm } from 'react-hook-form';
import { Spinner } from '../../utils/spinner';
export const SignupAuthentication = () => {
	const history = useHistory();
	const [authSignup, setAuthSignUp] = useState({});

	// react hook form
	const { register, handleSubmit, errors } = useForm();
	// redux hooks

	const dispatch = useDispatch();

	const loading = useSelector(state => state.authReducer.loaading);

	const handleChange = e => setAuthSignUp({ ...authSignup, [e.target.name]: e.target.value });

	const hdlSubmit = () => {
		// confirm password

		if (authSignup.confirmpassword !== authSignup.password) {
			return Toastr.error('Password do not match');
		}
		delete authSignup.confirmpassword;
		dispatch(registerUser(authSignup, history));
	};

	const OnClickSignin = () => {
		const link = '#sec_2';
		localStorage.setItem('link', link);
	};

	return (
		<SA.signupContainer>
			<SA.spinnerWrapper>{loading && <Spinner />}</SA.spinnerWrapper>
			<SA.SignupLeft>
				<Particle className="signUpParticleJs">
					<SA.Div>
						{' '}
						<Link to="/">Banka</Link>
					</SA.Div>
					<SA.Animationcard>
						<SA.Img src={require('../../asset/images/download.png')} />
					</SA.Animationcard>
				</Particle>
			</SA.SignupLeft>
			<SA.Signupright>
				<SA.SignupHeadText>
					Already have an account?{' '}
					<Link to="/" onClick={OnClickSignin}>
						Signin{' '}
					</Link>
				</SA.SignupHeadText>
				<SA.Form>
					<SA.formRow className="form-row">
						<SA.formGroup className="form-group col-md-6">
							<SA.FormInput
								ref={register({ required: true, maxLength: 20 })}
								type="text"
								name="firstname"
								placeholder="first Name"
								className="form-control"
								onChange={handleChange}
							/>
							{errors.firstname && <SA.error>First name is required</SA.error>}
						</SA.formGroup>
						<SA.formGroup className="form-group col-md-6">
							<SA.FormInput
								ref={register({ required: true, maxLength: 20 })}
								type="text"
								name="lastname"
								placeholder="Last Name"
								className="form-control"
								onChange={handleChange}
							/>
							{errors.lastname && <SA.error>Last name is required</SA.error>}
						</SA.formGroup>
						<SA.formGroup className="form-group col-md-6">
							<SA.FormInput
								ref={register({ required: true, maxLength: 20 })}
								type="text"
								name="username"
								placeholder="Username"
								className="form-control"
								onChange={handleChange}
							/>
							{errors.username && <SA.error>Username is required</SA.error>}
						</SA.formGroup>

						<SA.formGroup className="form-group col-md-6">
							<SA.FormInput
								ref={register({
									required: 'Required',
									pattern: {
										value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
										message: 'invalid email address',
									},
								})}
								type="email"
								name="email"
								placeholder="Email"
								onChange={handleChange}
								className="form-control"
							/>
							{errors.email && <SA.error>{errors.email.message}</SA.error>}
						</SA.formGroup>
						<SA.formGroup className="form-group col-md-6">
							<SA.FormInput
								ref={register({ required: true, maxLength: 20 })}
								type="password"
								name="password"
								placeholder="Password"
								className="form-control"
								onChange={handleChange}
							/>
							{errors.password && <SA.error>password is required</SA.error>}
						</SA.formGroup>
						<SA.formGroup className="form-group col-md-6">
							<SA.FormInput
								ref={register({ required: true, maxLength: 20 })}
								type="password"
								name="confirmpassword"
								placeholder=" Confirm Password"
								className="form-control"
								onChange={handleChange}
							/>
						</SA.formGroup>
						<SA.SignupBotton type="button" onClick={handleSubmit(hdlSubmit)}>
							{' '}
							sign Up
						</SA.SignupBotton>
					</SA.formRow>
				</SA.Form>
			</SA.Signupright>
		</SA.signupContainer>
	);
};
