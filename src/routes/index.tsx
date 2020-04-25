import React from 'react';
import {Route, Switch} from 'react-router';
import PageNotFound from '../components/Error/PageNotFound';
import FarmDetails from './components/Farm/FarmDetails';
import CreateProject from './components/Farm/CreateFarm';
import SignIn from './components/User/SignIn';
import SignUp from './components/User/SignUp';

const routes = (
	<div>
		<Switch>
			<Route
				exact
				path="/404"
				component={PageNotFound}
			/>
		</Switch>
	</div>
);

export default routes;
