import React from "react";
import { Container, Row } from "react-bootstrap";
import "./Login.css";
import LeftLogin from "../../Components/LeftLogin/LeftLogin";
import RightLogin from "../../Components/RightLogin/RightLoginCompany";
import { useNavigate } from "react-router";

const CompanyLogin = () => {
	const navigate = useNavigate();
	// React.useEffect(() => {
	// 	if (localStorage.getItem("token")) {
	// 		navigate("/home");
	// 	}
	// }, []);
	return (
		<>
			<Container fluid className="App">
				<Row className="form-login">
					<LeftLogin />
					<RightLogin />
				</Row>
			</Container>
		</>
	);
};

export default CompanyLogin;
