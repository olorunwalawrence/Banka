import React from 'react';
import * as UAC from './account.style';
import { HarmBurger } from '../hambugger/hamBurger';

export const CreateAccount = () => {
	return (
		<UAC.Container>
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
								<UAC.Form>
									<UAC.FormRow className="form-row">
										<UAC.Div className="form-group col-md-6">
											<UAC.label for="email">first Name</UAC.label>
											<UAC.Input type="text" className="form-control" placeholder="First Name" />
										</UAC.Div>
										<UAC.Div className="form-group col-md-6">
											<UAC.label for="email">Last Name</UAC.label>
											<UAC.Input type="text" className="form-control" placeholder="Last Name" />
										</UAC.Div>
										<UAC.Div className="form-group col-md-6">
											<UAC.label for="email">Maiden Name</UAC.label>
											<UAC.Input type="text" className="form-control" placeholder="Maiden Name" />
										</UAC.Div>
										<UAC.Div className="form-group col-md-6">
											<UAC.label for="City">City</UAC.label>
											<UAC.Input type="text" className="form-control" placeholder="City" />
										</UAC.Div>

										<UAC.Div className="form-group col-md-6">
											<UAC.label for="State">State</UAC.label>
											<UAC.Input type="text" className="form-control" placeholder="State" />
										</UAC.Div>
										<UAC.Div className="form-group col-md-6">
											<UAC.label for="country">country</UAC.label>
											<UAC.Input type="text" className="form-control" placeholder="Country" />
										</UAC.Div>
									</UAC.FormRow>
									<UAC.formGroup className="form-group">
										<UAC.Div className="form-group col-md-12">
											<UAC.label for="address"> Office Address</UAC.label>
											<UAC.Input
												type="text"
												className="form-control"
												placeholder=" Office Address"
											/>
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
									>
										Create Account
									</UAC.Button>
								</UAC.Form>
							</UAC.Div>
						</UAC.formWrapper>
					</UAC.FormContainer>
				</UAC.RightSection>
			</UAC.wrapper>
		</UAC.Container>
	);
};
