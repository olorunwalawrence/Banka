import React from 'react';
import Particles from 'react-particles-js';
import config from '../../asset/particlesjs-config.json';

export const Particle = ({ children }) => {
	return (
		<>
			<Particles className="particleJs" params={config} />

			{children}
		</>
	);
};
