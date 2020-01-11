import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './themes';
import { Banka } from './screen/banka';
import { SignupAuth } from './pages/signup';
import { DashBoardPage } from './pages/UserDashboard';
import { Account } from './pages/userAccount';
import {Profile } from './pages/profile';
function App() {
	return (
		<Router>
			<ThemeProvider theme={theme}>
				<>
					<GlobalStyles />
					<Switch>
						<Route path="/" exact component={Banka} />
						<Route path="/signup" exact component={SignupAuth} />
						<Route path="/dashboard" exact component={DashBoardPage} />
						<Route path="/acoount" exact component={Account} />
						<Route path="/profile" exact component={Profile} />
					</Switch>
				</>
			</ThemeProvider>
		</Router>
	);
}

export default App;
