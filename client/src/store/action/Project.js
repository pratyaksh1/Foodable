import { url } from "../../constants/url";
export const GET_ALL_PROJECTS = "GET_ALL_PROJECTS";

export const getAllProjects = () => {
	return async (dispatch) => {
		try {
			const response = await fetch(`${url}/project/get-project`, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			});
			if (response.ok) {
				const responseJson = await response.json();
				console.log(responseJson);
				dispatch({ type: GET_ALL_PROJECTS, payload: responseJson });
			} else {
				throw new Error();
			}
		} catch (error) {
			console.log(error);
			throw new Error();
		}
	};
};

export const addProject = (
	projectName,
	category,
	timePeriod,
	description,
	token
) => {
	return async (dispatch) => {
		const response = await fetch(`${url}/project/project-data`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"x-auth-token": token,
			},
			body: JSON.stringify({
				name: projectName,
				category,
				timePeriod,
				description,
			}),
		});
		if (response.ok) {
			const responseJson = await response.json();
			console.log(responseJson);
			dispatch({ type: GET_ALL_PROJECTS, payload: responseJson });
		} else {
			throw new Error();
		}
	};
};

export const ApplyNow = (projectId, description, token) => {
	return async (dispatch) => {
		const response = await fetch(`${url}/project/apply-data`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"x-auth-token": token,
			},
			body: JSON.stringify({
				projectId,
				description,
			}),
		});
		if (response.ok) {
			const responseJson = await response.json();
			console.log(responseJson);
			dispatch({ type: GET_ALL_PROJECTS, payload: responseJson });
		} else {
			throw new Error();
		}
	};
};

export const acceptMentee = (projectId, menteeId, token) => {
	return async (dispatch) => {
		const response = await fetch(`${url}/project/accept-data`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"x-auth-token": token,
			},
			body: JSON.stringify({
				projectId,
				menteeId,
			}),
		});
		if (response.ok) {
			const responseJson = await response.json();
			console.log(responseJson);
			dispatch({ type: GET_ALL_PROJECTS, payload: responseJson });
		} else {
			throw new Error();
		}
	};
};

export const showProfile = (token) => {
	return async (dispatch) => {
		try {
			const response = await fetch(`${url}/project/show-profile`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					"x-auth-token": token,
				},
			});
			const responseJson = await response.json();
			console.log(responseJson.project);
			return responseJson;
		} catch (error) {
			console.log(error);
			throw new Error();
		}
	};
};
