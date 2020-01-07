import React, { Fragment } from 'react';
import * as BA from './banner.style';
// import { Navigation } from '../naigation/nav';

export const Banners = () => {
	return (
		<Fragment>
			<BA.Banner></BA.Banner>
			<BA.OverLay></BA.OverLay>
		</Fragment>
	);
};
