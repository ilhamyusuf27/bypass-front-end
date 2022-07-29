import axios from "axios";
const instance = axios.create({
	baseURL: process.env.REACT_APP_URL_API,
	headers: {
		Authorization: `Bearir ${localStorage.getItem("token")}`,
	},
});
export default instance;
