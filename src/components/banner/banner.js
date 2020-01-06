import React, { Fragment } from 'react';
import * as BA from './banner.style';
// import { Navigation } from '../naigation/nav';

export const Banners = ({ children }) => {
	return (
		<Fragment>
			<BA.Banner></BA.Banner>
			<BA.OverLay></BA.OverLay>
			{/* <Navigation /> */}
			{children}
		</Fragment>
	);
};
