import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddProjectScreen from "../screens/AddProjectScreen";
import InitialScreen from "../screens/InitialScreen";
import LandingScreen from "../screens/LandingScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SignUpScreen from "../screens/SignUpScreen";

const Routes = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={InitialScreen} />
				<Route exact path="/home" component={LandingScreen} />
				<Route exact path="/sign-up" component={SignUpScreen} />
				<Route exact path="/add-project" component={AddProjectScreen} />
				<Route exact path="/profile" component={ProfileScreen} />
			</Switch>
		</Router>
	);
};

export default Routes;
