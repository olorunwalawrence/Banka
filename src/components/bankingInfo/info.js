import React from 'react';
import * as BI from './info.style';
import { Particle } from '../particles/particle';

export const BankinInfo = ({ id }) => {
	return (
		<BI.InfoContainer id={id}>
			<BI.wrapper>
				<BI.card>
					<BI.fontAwesome src={require('../../asset/images/icons8-registration-100.png')} />
					<BI.infoHeader>online Registration</BI.infoHeader>
					<BI.para>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation.
					</BI.para>
				</BI.card>
				<BI.card>
					<BI.fontAwesome src={require('../../asset/images/icons8-deposit-100.png')} />
					<BI.infoHeader>Online Deposit </BI.infoHeader>
					<BI.para>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation.
					</BI.para>
				</BI.card>
				<BI.card>
					<BI.fontAwesome src={require('../../asset/images/icons8-bounced-check-100.png')} />
					<BI.infoHeader>Check account balance online</BI.infoHeader>
					<BI.para>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation.
					</BI.para>
				</BI.card>
			</BI.wrapper>
			<section>
				<BI.secondSectionWrapper>
					<BI.Animation>
						<Particle className="particleJs">
							<BI.Animationcard>
								<BI.Img src={require('../../asset/images/download.png')} />
							</BI.Animationcard>
						</Particle>
					</BI.Animation>
					<BI.info>
						<BI.InfoWrapper>
							<BI.Title>Banking with us is make easy</BI.Title>
							<BI.para>
								nappropriate behavior is often laughed off as “boys will be boys, women face higher
								conduct standards especially in the workplace. That’s why it’s crucial that, as women,
								our behavior on the jobs beyond reproach. Lorem ipsum dolor sit amet, consectetur
								adipicin elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam.
							</BI.para>
						</BI.InfoWrapper>
					</BI.info>
				</BI.secondSectionWrapper>
			</section>
		</BI.InfoContainer>
	);
};
