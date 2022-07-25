import axios from "../../Axios/Axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

const defaultState = {
	isLoading: false,
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
		case "SET_LOADING": {
			return {
				...state,
				isLoading: action.data,
			};
		}
		default: {
			return state;
		}
	}
};

const loginCompanyRequest = ({ email, password }) => {
	return (dispatch) => {
		dispatch({
			type: "SET_LOADING",
			data: true,
		});

		axios
			.post("/company/login", {
				recruiter_email: email,
				recruiter_password: password,
			})
			.then((res) => {
				localStorage.setItem("token", res?.data?.token);
				localStorage.setItem("data", JSON.stringify(res?.data?.data));
				dispatch({
					type: "SET_TOKEN",
					data: res?.data?.token,
				});
				dispatch({
					type: "SET_PROFILE",
					data: res?.data?.data,
				});
				Swal.fire({
					icon: "success",
					title: "Login Sukses",
				});
			})
			.catch((err) => {
				dispatch({
					type: "SET_LOADING",
					data: false,
				});
				Swal.fire({
					icon: "error",
					title: "Login Failed",
					text: err?.response?.data,
				});
			});
	};
};

export { loginCompanyReducer, loginCompanyRequest };
