import React, { useEffect, useCallback } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import * as authActions from "../store/action/Auth";
import { CircularProgress } from "@mui/material";

export default function InitialScreen(props) {
	const dispatch = useDispatch();
	const auth = useSelector((state) => state.Auth);
	const checkAutoLogIn = useCallback(async () => {
		try {
			if (auth.token) await dispatch(authActions.autoLogin(auth.token));
			props.history.push("/home");
		} catch (error) {
			dispatch(authActions.setDidTryAutoLogin());
			props.history.push("/home");
		}
	}, [props.history, dispatch, auth.token]);

	useEffect(() => {
		checkAutoLogIn();
	}, [checkAutoLogIn]);

	return (
		<Container>
			<CircularProgress color="primary"></CircularProgress>
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	align-items: center;
	height: 100vh;
	justify-content: center;
`;
