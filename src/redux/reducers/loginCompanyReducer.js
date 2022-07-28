import axios from "../../Axios/Axios";
import Swal from "sweetalert2";
import CryptoJS from "crypto-js";

const defaultState = {
	isLoading: false,
	token: "",
	profile: "",
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
				profile: action.data,
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
				const data = JSON.stringify(res?.data?.data);
				let ciphertext = CryptoJS.AES.encrypt(data, process.env.REACT_APP_SECRET_KEY).toString();
				localStorage.setItem("token", res?.data?.token);
				localStorage.setItem("data", ciphertext);
				dispatch({
					type: "SET_TOKEN",
					data: res?.data?.token,
				});
				dispatch({
					type: "SET_PROFILE",
					data: ciphertext,
				});
				Swal.fire({
					icon: "success",
					title: "Login Sukses",
				});
				dispatch({
					type: "SET_LOADING",
					data: false,
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
