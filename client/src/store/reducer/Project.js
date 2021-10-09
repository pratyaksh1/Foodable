import { GET_ALL_PROJECTS } from "../action/Project";

const initialState = {
	projects: [],
};

export default function ProjectReducer(state = initialState, action) {
	switch (action.type) {
		case GET_ALL_PROJECTS: {
			return {
				projects: action.payload.projects,
			};
		}

		default: {
			return state;
		}
	}
}
