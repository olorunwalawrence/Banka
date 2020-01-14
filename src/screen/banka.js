import React, { useRef, useEffect } from 'react';
import * as style from './banka.style';
import { Banners } from '../components/banner/banner';
import { Navigation } from '../components/naigation/nav';
import { LoginAuth } from '../components/loginAuth/login';
import { BankinInfo } from '../components/bankingInfo/info';
import { Footer } from '../components/footer/footer';
import { Link } from 'react-router-dom';

export const Banka = () => {
	const login = useRef(null);

	useEffect(() => {
		if (localStorage.getItem('link') && login.current) {
			login.current.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			});
			setTimeout(() => {
				localStorage.clear('link');
			}, 1000);
		}
	}, [login]);
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
			<div ref={login}>
				<LoginAuth id="/sec_2" />
			</div>
			<BankinInfo id="sec_3" />
			<Footer id="sec_4" />
		</style.screenContainer>
	);
};
