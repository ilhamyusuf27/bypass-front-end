import React from "react";
import { Container, Row } from "react-bootstrap";
import "./Login.css";
import LeftLogin from "../../Components/LeftLogin/LeftLogin";
import RightLoginEmployee from "../../Components/RightLogin/RightLoginEmployee";
import { useNavigate } from "react-router";

const EmployeLogin = () => {
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
					<LeftLogin />
					<RightLoginEmployee />
				</Row>
			</Container>
		</>
	);
};

export default EmployeLogin;
