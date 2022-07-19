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

const Home = () => {
  return (
    <>
      <div className="row">
        <h3 className="header-home py-3 wrapper-home">Top Jobs</h3>
      </div>

      <div className="wrapper-home mt-3">
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
            <Dropdown.Item href="#">Sortir Berdasarkan Freelance</Dropdown.Item>
            <Dropdown.Item href="#">Sortir Berdasarkan Fulltime</Dropdown.Item>
          </DropdownButton>
          <Button variant="flat">Search</Button>
        </InputGroup>
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
          <div className="col-md-2 offset-md-5 align-self-center text-end">
            <Button variant="flat">Lihat Profile</Button>
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
          <div className="col-md-2 offset-md-5 align-self-center text-end">
            <Button variant="flat">Lihat Profile</Button>
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
          <div className="col-md-2 offset-md-5 align-self-center text-end">
            <Button variant="flat">Lihat Profile</Button>
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
          <div className="col-md-2 offset-md-5 align-self-center text-end">
            <Button variant="flat">Lihat Profile</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
