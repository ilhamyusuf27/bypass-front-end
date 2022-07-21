import React, { useState } from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import brandLogo from "../../Assets/Images/brand.png";
import userNavIcon from "../../Assets/Images/userNav.png";
import mailIcon from "../../Assets/Images/mail.png";
import bellIcon from "../../Assets/Images/bell.png";

const Navibar = () => {
  const [isLogin, setIslogin] = useState(true);

  return (
    <>
      <div className="row">
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
          <Container>
            <Navbar.Brand href="#home">
              <img src={brandLogo} alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"></Nav>
              <Nav>
                {isLogin ? (
                  <>
                    <Link to="/login">
                      <Button
                        variant="outline-flat"
                        style={{ marginRight: "5px" }}
                        size="md"
                      >
                        Masuk
                      </Button>
                    </Link>
                    <Link to="/register-company">
                      <Button variant="flat" size="md">
                        Daftar
                      </Button>
                    </Link>
                  </>
                ) : (
                  <>
                    <Nav.Link href="#deets">
                      <img src={mailIcon} alt="" />
                    </Nav.Link>
                    <Nav.Link href="#deets">
                      <img src={bellIcon} alt="" />
                    </Nav.Link>
                    <Nav.Link href="#deets">
                      <img src={userNavIcon} alt="" />
                    </Nav.Link>
                  </>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default Navibar;
