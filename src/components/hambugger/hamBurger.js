import React, { useState, useRef } from 'react';

import { Menu } from '../hambugger/menu/menu';
import { Burger } from '../hambugger/burger/burger';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { GlobalStyle } from './global';
import { useOnClickOutside } from './hamburgerClickToClose';

export const HarmBurger = () => {
	const [open, setOpen] = useState(false);

	const node = useRef();
	useOnClickOutside(node, () => setOpen(false));

	return (
		<ThemeProvider theme={theme}>
			<>
				<GlobalStyle />
				{/* <Burger open={open} setOpen={setOpen} /> */}
				<Menu open={open} setOpen={setOpen} />
				{/* <div>
					<h1>Hello. This is burger menu tutorial</h1>
					<img src="https://image.flaticon.com/icons/svg/2016/2016012.svg" alt="burger icon" />
					<small>Icon made by Freepik from www.flaticon.com</small>
				</div> */}
			</>
		</ThemeProvider>
	);
};
