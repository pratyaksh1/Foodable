import { url } from "../../constants/url";
export const SET_DID_TRY_AUTOLOGIN = "SET_DID_TRY_AUTOLOGIN";
export const AUTHENTICATE_USER = "AUTHENTICATE_USER";

export const setDidTryAutoLogin = () => {
	return (dispatch) => {
		dispatch({ type: SET_DID_TRY_AUTOLOGIN });
	};
};

export const signIn = (phoneNumber) => {
	return async (dispatch) => {
		try {
			const response = await fetch(`${url}/auth/sign-in`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					phoneNumber,
				}),
			});
			const responseJson = await response.json();
			console.log(responseJson);
		} catch (error) {
			console.log(error);
			throw new Error();
		}
	};
};

export const authenticatePhoneNumber = (code, phoneNumber) => {
	return async (dispatch) => {
		try {
			const response = await fetch(`${url}/auth/authenticate-phoneNumber`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					phoneNumber,
					code,
				}),
			});
			if (response.ok) {
				const responseJson = await response.json();
				console.log(responseJson);
				dispatch({ type: AUTHENTICATE_USER, payload: responseJson });
			} else {
				throw new Error();
			}
		} catch (error) {
			console.log(error);
			throw new Error();
		}
	};
};
