import { combineReducers } from "redux";
import loginCompanyReducer from "./reducers/loginCompanyReducer";

const rootReducer = combineReducers({
	loginCompany: loginCompanyReducer,
});

export default rootReducer;
