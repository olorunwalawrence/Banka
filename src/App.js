import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AutoFill } from './store/actions/autoFillInfo';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './themes';
import { Banka } from './screen/banka';
import { SignupAuth } from './pages/signup';
import { DashBoardPage } from './pages/UserDashboard';
import { Account } from './pages/userAccount';
import { Profile } from './pages/profile';
import viewMyProfile from './store/actions/profileAction';
function App() {
	const dispatch = useDispatch();
	const user = useSelector(state => state.autoFillInfo.user);
	useEffect(() => {
		if (!user) {
			dispatch(AutoFill());
		}
		if (user) {
			dispatch(viewMyProfile());
		}
	}, [dispatch, user]);

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
