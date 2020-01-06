import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './themes';

import { Banka } from './screen/banka';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<>
				<GlobalStyles />
				<Banka />
			</>
		</ThemeProvider>
	);
}

export default App;
