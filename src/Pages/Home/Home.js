import React from "react";
import "./Home.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import { GoLocation } from "react-icons/go";
import profileImg from "../../Assets/Images/profile image example.jpeg";
import { Container } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <div className="header-home">
        <Container>
          <h3 className="py-3">Top Jobs</h3>
        </Container>
      </div>
      <div className="mt-3">
        <Container>
          <InputGroup className="mb-3">
            <Form.Control
              aria-label="Text input with dropdown button"
              size="lg"
            />
            <DropdownButton
              variant="light"
              title="Kategori"
              id="input-group-dropdown-2"
              align="end"
            >
              <Dropdown.Item href="#">Sortir Berdasarkan Nama</Dropdown.Item>
              <Dropdown.Item href="#">Sortir Berdasarkan Skill</Dropdown.Item>
              <Dropdown.Item href="#">Sortir Berdasarkan Lokasi</Dropdown.Item>
              <Dropdown.Item href="#">
                Sortir Berdasarkan Freelance
              </Dropdown.Item>
              <Dropdown.Item href="#">
                Sortir Berdasarkan Fulltime
              </Dropdown.Item>
            </DropdownButton>
            <Button variant="flat">Search</Button>
          </InputGroup>
          <div
            className="card mb-3"
            style={{ maxWidth: "100%", border: "none" }}
          >
            <div className="row">
              <div className="col-md-5">
                <div
                  className="card mb-3"
                  style={{ maxWidth: "540px", border: "none" }}
                >
                  <div className="row g-0">
                    <div className="col-md-4">
                      <div>
                        <img
                          src={profileImg}
                          className="img-fluid rounded-start img-user-home"
                          alt="..."
                        />
                      </div>
                    </div>
                    <div className="col-md-8 align-self-center">
                      <div className="card-body body-user-home">
                        <h5 className="card-title">Louis Tomlinson</h5>
                        <p className="card-text">Web Developer</p>
                        <p className="card-text">
                          <small className="text-muted">
                            <GoLocation /> lorem ipsum
                          </small>
                        </p>
                        <span className="skills-badge-home">
                          <Badge bg="warning">PHP</Badge>
                        </span>
                        <span className="skills-badge-home">
                          <Badge bg="warning">JavaScript</Badge>
                        </span>
                        <span className="skills-badge-home">
                          <Badge bg="warning">HTML</Badge>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-7 d-flex justify-content-end align-items-center">
                <div className="col-md-2 ">
                  <Button variant="flat">Lihat Profile</Button>
                </div>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-md-5">
                <div
                  className="card mb-3"
                  style={{ maxWidth: "540px", border: "none" }}
                >
                  <div className="row g-0">
                    <div className="col-md-4">
                      <div>
                        <img
                          src={profileImg}
                          className="img-fluid rounded-start img-user-home"
                          alt="..."
                        />
                      </div>
                    </div>
                    <div className="col-md-8 align-self-center">
                      <div className="card-body body-user-home">
                        <h5 className="card-title">Louis Tomlinson</h5>
                        <p className="card-text">Web Developer</p>
                        <p className="card-text">
                          <small className="text-muted">
                            <GoLocation /> lorem ipsum
                          </small>
                        </p>
                        <span className="skills-badge-home">
                          <Badge bg="warning">PHP</Badge>
                        </span>
                        <span className="skills-badge-home">
                          <Badge bg="warning">JavaScript</Badge>
                        </span>
                        <span className="skills-badge-home">
                          <Badge bg="warning">HTML</Badge>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-7 d-flex justify-content-end align-items-center">
                <div className="col-md-2 ">
                  <Button variant="flat">Lihat Profile</Button>
                </div>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-md-5">
                <div
                  className="card mb-3"
                  style={{ maxWidth: "540px", border: "none" }}
                >
                  <div className="row g-0">
                    <div className="col-md-4">
                      <div>
                        <img
                          src={profileImg}
                          className="img-fluid rounded-start img-user-home"
                          alt="..."
                        />
                      </div>
                    </div>
                    <div className="col-md-8 align-self-center">
                      <div className="card-body body-user-home">
                        <h5 className="card-title">Louis Tomlinson</h5>
                        <p className="card-text">Web Developer</p>
                        <p className="card-text">
                          <small className="text-muted">
                            <GoLocation /> lorem ipsum
                          </small>
                        </p>
                        <span className="skills-badge-home">
                          <Badge bg="warning">PHP</Badge>
                        </span>
                        <span className="skills-badge-home">
                          <Badge bg="warning">JavaScript</Badge>
                        </span>
                        <span className="skills-badge-home">
                          <Badge bg="warning">HTML</Badge>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-7 d-flex justify-content-end align-items-center">
                <div className="col-md-2 ">
                  <Button variant="flat">Lihat Profile</Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Home;
