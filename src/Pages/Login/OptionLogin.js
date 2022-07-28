import React from "react";
import { Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Login.css";

function OptionLogin() {
  return (
    <>
      <Container fluid className="App bg-option p-0">
        <div className="px-0">
          <div className="background">
            <div className="opacity"></div>
            <img
              src={require("../../Assets/Images/brandWhite.png")}
              alt="Logo login"
              className="logo-login"
            />
          </div>
        </div>
        <Row className="option-login">
          <div className="col-lg-6 col-md-6 col-sm-12 p-4">
            <img
              src={require("../../Assets/Images/tag.png")}
              alt="Logo login"
              className="tagline-option-login"
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 p-4">
            <Link to="/employee-login" className="text-none">
              <div className="d-grid gap-2">
                <Button
                  variant="primary"
                  size="lg"
                  className="login-as-employee py-3"
                >
                  Masuk sebagai pekerja
                </Button>
              </div>
            </Link>
            <div class="strike">
              <span>atau</span>
            </div>

            <Link to="/company-login" className="text-none">
              <div className="d-grid gap-2">
              <Button
                  variant="outline-secondary"
                  size="lg"
                  className="login-as-company py-3"
                >
                  Masuk sebagai perekrut
                </Button>
              </div>
            </Link>

            
          </div>
        </Row>
      </Container>
    </>
  );
}

export default OptionLogin;
