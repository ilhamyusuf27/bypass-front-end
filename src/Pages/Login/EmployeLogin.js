import React from "react";
import { Container, Row } from "react-bootstrap";
import "./Login.css";
import LeftLogin from "../../Components/LeftLogin/LeftLogin";
import RightLoginEmployee from "../../Components/RightLogin/RightLoginEmployee";

const EmployeLogin = () => {
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
