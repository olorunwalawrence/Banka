import React from 'react';
import * as style from './banka.style';
import { Banners } from '../components/banner/banner';
import { Navigation } from '../components/naigation/nav';
import { LoginAuth } from '../components/loginAuth/login';
import { BankinInfo } from '../components/bankingInfo/info';
import { Footer } from '../components/footer/footer';

export const Banka = () => {
	return (
		<style.screenContainer>
			<Navigation id="sec_1" />

			<Banners>
				<style.BannerTextWrapper>
					<style.bannertextHeader>the bast bank you would want to transact with</style.bannertextHeader>
					<style.BannerTextTiite>Banka</style.BannerTextTiite>
					<style.bannerText>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temp or incididunt ut
						labore et dolore magna aliqua. Ut enim ad minim.
					</style.bannerText>

					<style.bannerButton>Get started</style.bannerButton>
				</style.BannerTextWrapper>
			</Banners>
			<LoginAuth id="sec_2" />
			<BankinInfo id="sec_3" />
			<Footer id="sec_4" />
		</style.screenContainer>
	);
};
