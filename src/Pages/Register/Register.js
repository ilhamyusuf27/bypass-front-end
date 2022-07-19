import React from 'react'
import { Container, Row } from "react-bootstrap";
import "./Register.css";
import LeftRegister from "../../Components/LeftRegister/LeftRegister";
import RightRegister from "../../Components/RightRegister/RightRegister";

function Register() {
  return (
    <>
      <Container fluid className="App">
        <Row className="form-login">
          <LeftRegister />
          <RightRegister />
        </Row>
      </Container>
    </>
  )
}

export default Register