import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as routeNames from '../constants/routes';
import Home from '../modules/Home';
import Apps from '../modules/Apps';
import Profile from '../modules/Profile';
import Reports from '../modules/Reports';
import InsideTheApp from '../modules/InsideTheApp';
import NaturalLanguageQuery from '../modules/NaturalLanguageQuery';

const RootRouter = () => {
	return (
		<Router>
			<Switch>
				<Route exact path={routeNames.home}>
					{/* <Home /> */}
					<InsideTheApp />
				</Route>
				<Route path={routeNames.apps}>
					<Apps />
				</Route>
				<Route path={routeNames.profile}>
					<Profile />
				</Route>
				<Route path={routeNames.reports}>
					<Reports />
				</Route>
				<Route path={routeNames.insideTheApp}>
					<InsideTheApp />
				</Route>
				<Route path={routeNames.naturalLanguageQuery}>
					<NaturalLanguageQuery />
				</Route>
			</Switch>
		</Router>
	);
};

export default RootRouter;
