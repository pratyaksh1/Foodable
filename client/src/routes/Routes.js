import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddProjectScreen from "../screens/AddProjectScreen";
import LandingScreen from "../screens/LandingScreen";
import SignUpScreen from "../screens/SignUpScreen";

const Routes = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={LandingScreen} />
				<Route exact path="/sign-up" component={SignUpScreen} />
				<Route exact path="/add-project" component={AddProjectScreen} />
			</Switch>
		</Router>
	);
};

export default Routes;
