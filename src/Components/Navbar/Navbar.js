import React, { useState } from "react";
import {
  Container,
  Navbar,
  Nav,
  Button,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import brandLogo from "../../Assets/Images/brand.png";
import userNavIcon from "../../Assets/Images/userNav.png";
import mailIcon from "../../Assets/Images/mail.png";
import bellIcon from "../../Assets/Images/bell.png";

const Navibar = () => {
  const navigate = useNavigate();
  const [isLogin, setIslogin] = useState(true);
  const [user, setUser] = useState(null);

  React.useEffect(() => {
    if(localStorage.getItem("token")) {
      setIslogin(false);
    }
  })
  
  React.useEffect(() => {
    if(localStorage.getItem("token")) {
      setIslogin(false);
    }
  })

  const handleRegPekerja = () => {
    navigate("/register");
  };

  const handleRegCompany = () => {
    navigate("/register-company");
  };

  return (
    <>
      <div className="row">
        <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
          <Container>
            <Navbar.Brand href="/">
              <img src={brandLogo} alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"></Nav>
              <Nav>
                {isLogin ? (
                  <>
                    <Link to="/option-login">
                      <Button
                        variant="outline-flat"
                        style={{ marginRight: "5px" }}
                        size="md"
                      >
                        Masuk
                      </Button>
                    </Link>

                    <DropdownButton
                      variant="flat"
                      title="Daftar"
                      id="bg-nested-dropdown"
                    >
                        <Dropdown.Item onClick={handleRegPekerja}>Pekerja</Dropdown.Item>
                        <Dropdown.Item onClick={handleRegCompany}>Perekrut</Dropdown.Item>
                    </DropdownButton>
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
