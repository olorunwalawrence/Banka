import React from 'react';
import Particles from 'react-particles-js';
import config from '../../asset/particlesjs-config.json';

export const Particle = ({ children, className }) => {
	return (
		<>
			<Particles className={className} params={config} />

			{children}
		</>
	);
};
