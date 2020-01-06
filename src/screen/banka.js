import React from 'react';
import * as style from './banka.style';
import { Banners } from '../components/banner/banner';
import { Navigation } from '../components/naigation/nav';

export const Banka = () => {
	return (
		<style.screenContainer>
			<Banners>
				<Navigation />
			</Banners>
		</style.screenContainer>
	);
};
