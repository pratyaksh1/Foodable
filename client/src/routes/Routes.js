import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUpScreen from "../screens/SignUpScreen";

const Routes = () => {
	return (
		<Router>
			<Switch>
				<SignUpScreen />
			</Switch>
		</Router>
	);
};

export default Routes;
