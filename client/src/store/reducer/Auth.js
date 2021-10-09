import {
	AUTHENTICATE_USER,
	SET_DID_TRY_AUTOLOGIN,
	SIGN_UP_DETAILS,
} from "../action/Auth";

const initialState = {
	userId: "",
	firstName: "",
	lastName: "",
	isAuth: false,
	token: "",
	setDidTryAutoLogin: false,
	phoneNumber: "",
	emailId: "",
	collegeName: "",
	yearOfStudy: "",
};

export default function AuthReducer(state = initialState, action) {
	switch (action.type) {
		case SET_DID_TRY_AUTOLOGIN: {
			return {
				...state,
				setDidTryAutoLogin: true,
			};
		}
		case AUTHENTICATE_USER: {
			return {
				//user_id acc to backend
				...state,
				setDidTryAutoLogin: true,
				firstName: action.payload.firstName,
				lastName: action.payload.lastName,
				isAuth: true,
				phoneNumber: action.payload.phoneNumber,
				emailId: action.payload.emailId,
				collegeName: action.payload.collegeName,
				yearOfStudy: action.payload.yearOfStudy,
				token: action.payload.token,
			};
		}
		case SIGN_UP_DETAILS: {
			return {
				//user_id acc to backend
				...state,
				firstName: action.payload.firstName,
				lastName: action.payload.lastName,
				emailId: action.payload.emailId,
				collegeName: action.payload.collegeName,
				yearOfStudy: action.payload.yearOfStudy,
			};
		}
		default: {
			return state;
		}
	}
}
