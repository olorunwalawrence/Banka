import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './themes';
import { Banka } from './screen/banka';
import { SignupAuth } from './pages/signup';
import { DashBoardPage } from './pages/UserDashboard';
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
					</Switch>
				</>
			</ThemeProvider>
		</Router>
	);
}

export default App;
