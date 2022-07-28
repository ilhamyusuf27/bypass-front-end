import React from "react";
import CryptoJS from "crypto-js";

import LandingPage1 from "../../Components/LandingPage1/LandingPage1";
import LandingPage2 from "../../Components/LandingPage2/LandingPage2";
import LandingPage3 from "../../Components/LandingPage3/LandingPage3";

import { connect } from "react-redux";
import { useNavigate } from "react-router";

const LandingPage = (props) => {
	const navigate = useNavigate();

	const data = props?.dataCompany?.profile;
	const originalData = data ? JSON.parse(CryptoJS.AES.decrypt(data, process.env.REACT_APP_SECRET_KEY).toString(CryptoJS.enc.Utf8)) : null;

	React.useEffect(() => {
		if (originalData?.role) {
			navigate("/home");
		}
	}, []);
	return (
		<>
			<LandingPage1 />
			<LandingPage2 />
			<LandingPage3 />
		</>
	);
};

const mapStateToProps = (state) => ({
  dataCompany: state?.loginCompany,
});

const mapDispatchToProp = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProp)(LandingPage);
