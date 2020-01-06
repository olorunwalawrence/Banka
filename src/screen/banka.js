import React from 'react';
import * as style from './banka.style';
import { Banners } from '../components/banner/banner';
import { Navigation } from '../components/naigation/nav';
import { LoginAuth } from '../components/loginAuth/login';

export const Banka = () => {
	return (
		<style.screenContainer>
			<Banners>
				<Navigation id="sec_1" />
			</Banners>
			<LoginAuth id="sec_2" />
		</style.screenContainer>
	);
};
