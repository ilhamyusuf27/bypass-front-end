const defaultState = {
	token: "",
	profile: null,
};

const loginCompanyReducer = (state = defaultState, action) => {
	switch (action.type) {
		case "SET_TOKEN": {
			return {
				...state,
				token: action.data,
			};
		}
		case "SET_PROFILE": {
			return {
				...state,
				profile: { ...action.data },
			};
		}
		default: {
			return state;
		}
	}
};

export default loginCompanyReducer;
