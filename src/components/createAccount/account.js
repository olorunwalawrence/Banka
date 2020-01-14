import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as UAC from './account.style';
import * as SA from '../signup/signup.style';
import { HarmBurger } from '../hambugger/hamBurger';

import AccountCreation from '../../store/actions/creeateAcctaction';
import { Spinner } from '../../utils/spinner';
export const CreateAccount = () => {
	const [createAcct, setCreateAcct] = useState({});

	const handleChange = e => {
		setCreateAcct({ ...createAcct, [e.target.name]: e.target.value });
	};

	const history = useHistory();
	// react hook form
	const { register, handleSubmit, errors } = useForm();

	// auto fill user signupinfo on componentdidmount
	const dispatch = useDispatch();

	const loading = useSelector(state => state.BankAccountReducer.loaading);

	// create Bank account

	const hndleSubmit = e => {
		dispatch(AccountCreation(createAcct, history));
	};

	const Data = useSelector(state => state.autoFillInfo.user);

	return (
		<UAC.Container>
			<SA.spinnerWrapper>{loading && <Spinner />}</SA.spinnerWrapper>
			<UAC.wrapper>
				<UAC.LeftSideBar>
					<HarmBurger />
				</UAC.LeftSideBar>

				<UAC.RightSection>
					<UAC.Divs>Create your Account</UAC.Divs>

					<UAC.FormContainer>
						<UAC.formWrapper>
							<UAC.Div align="center" marginBottom="40px" size="1.5rem" color="#15549a">
								To Create an account kindly Fill the Form Below
							</UAC.Div>
							<UAC.Div width="70%" margin="1px auto" marginTop="70px" background="#f8f9fa" padding="20px">
								{Data && (
									<UAC.Form>
										<UAC.FormRow className="form-row">
											<UAC.Div className="form-group col-md-6">
												<UAC.label for="first name">first Name</UAC.label>
												<UAC.Input
													type="text"
													className="form-control"
													placeholder="First Name"
													name="firstname"
													value={Data.firstname}
													disabled={true}
												/>
											</UAC.Div>
											<UAC.Div className="form-group col-md-6">
												<UAC.label for="last name">Last Name</UAC.label>
												<UAC.Input
													type="text"
													name="lastname"
													className="form-control"
													placeholder="Last Name"
													value={Data.lastname}
													disabled={true}
												/>
											</UAC.Div>
											<UAC.Div className="form-group col-md-6">
												<UAC.label for="email">Email</UAC.label>
												<UAC.Input
													type="email"
													className="form-control"
													placeholder="Email"
													name="email"
													value={Data.email}
													disabled={true}
												/>
											</UAC.Div>
											<UAC.Div className="form-group col-md-6">
												<UAC.label for="Phone">Phone Number</UAC.label>
												<UAC.Input
													type="text"
													name="phoneNumber"
													className="form-control"
													onChange={handleChange}
													placeholder="Phone Number"
													ref={register({ required: true, maxLength: 20 })}
												/>
												{errors.phone && <SA.error>Phone Number is required</SA.error>}
											</UAC.Div>
											<UAC.Div className="form-group col-md-6">
												<UAC.label for="Phone">Type of Account</UAC.label>
												<UAC.Input
													type="text"
													name="type"
													className="form-control"
													onChange={handleChange}
													placeholder="Savings or Current"
													ref={register({ required: true, maxLength: 20 })}
												/>
												{errors.type && <SA.error>Account type is required</SA.error>}
											</UAC.Div>
										</UAC.FormRow>
										<UAC.formGroup className="form-group">
											<UAC.Div className="form-group col-md-12">
												<UAC.label for="address"> Home Address</UAC.label>
												<UAC.Input
													type="text"
													name="address"
													className="form-control"
													placeholder=" Home Address"
													onChange={handleChange}
													ref={register({ required: true, maxLength: 50 })}
												/>
												{errors.address && <SA.error>Address is required</SA.error>}
											</UAC.Div>
										</UAC.formGroup>
										<UAC.formGroup className="form-group">
											<UAC.Div className="form-group col-md-12"></UAC.Div>
										</UAC.formGroup>

										<UAC.Button
											width="50%"
											fontWeight="500"
											background="#15549a"
											color="white"
											padding="13px"
											align="center"
											size="20px"
											border="none"
											onClick={handleSubmit(hndleSubmit)}
										>
											Create Account
										</UAC.Button>
									</UAC.Form>
								)}
							</UAC.Div>
						</UAC.formWrapper>
					</UAC.FormContainer>
				</UAC.RightSection>
			</UAC.wrapper>
		</UAC.Container>
	);
};
