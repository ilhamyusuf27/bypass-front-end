import { combineReducers, createStore } from "redux";

const defaultState = {
	loading: false,
	result: [],
	option: [],
};

const registerReducer = (state = defaultState, action) => {
	switch (action.type) {
		case "SET_DATA": {
			return {
				...state,
				loading: action.data,
			};
		}
		default: {
			return state;
		}
	}
};

const rootReducer = combineReducers({
	register: registerReducer,
});

const store = createStore(rootReducer);

export default store;
