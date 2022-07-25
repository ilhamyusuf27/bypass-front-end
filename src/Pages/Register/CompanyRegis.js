import React from "react";
import { Container, Row } from "react-bootstrap";
import "./Register.css";
import LeftRegister from "../../Components/LeftRegister/LeftRegister";
import RightRegister from "../../Components/RightRegister/RightCompany";
import { useNavigate } from "react-router";

function CompanyRegis() {
	const navigate = useNavigate();
	React.useEffect(() => {
		if (localStorage.getItem("token")) {
			navigate("/");
		}
	}, []);
	return (
		<>
			<Container fluid className="App">
				<Row className="form-login">
					<LeftRegister />
					<RightRegister />
				</Row>
			</Container>
		</>
	);
}

export default CompanyRegis;
