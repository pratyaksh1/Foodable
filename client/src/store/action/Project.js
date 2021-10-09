import { url } from "../../constants/url";
export const GET_ALL_PROJECTS = "GET_ALL_PROJECTS";
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
