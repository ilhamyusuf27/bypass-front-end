import React from "react";
import { Button, Badge, Tab, Tabs } from "react-bootstrap";
import { GoLocation } from "react-icons/go";
import { AiOutlineMail } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";
import { FiGitlab } from "react-icons/fi";
import "./ProfileEmployee.css";
import employeeImg from "../../Assets/Images/profile image example.jpeg";
import logoCompany from "../../Assets/Images/logo-company.png";
import portoExample1 from "../../Assets/Images/portofolio-example-1.png";
import portoExample2 from "../../Assets/Images/portofolio-example-2.png";
import portoExample3 from "../../Assets/Images/portofolio-example.png";

const ProfileEmployee = () => {
  return (
    <>
      <div className="row profile-employee-bg">
        <div className="wrapper-home">
          <div className="row mt-5">
            <div className="col-4">
              <div className="card">
                <div className="text-center">
                  <img
                    src={employeeImg}
                    className="card-img-top profile-employee-img"
                    alt="..."
                  />
                </div>
                <div className="card-body mb-3">
                  <h5 className="card-title">Louis Tomlinson</h5>
                  <p>Web Developer</p>
                  <p className="card-text">
                    <small className="text-muted">
                      <GoLocation /> Purwokerto, Jawa Tengah
                    </small>
                  </p>
                  <small className="text-muted">Freelancer</small>
                  <p className="card-text">
                    <small className="text-muted">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vestibulum erat orci, mollis nec gravida sed, ornare quis
                      urna. Curabitur eu lacus fringilla, vestibulum risus at.
                    </small>
                  </p>
                  <Button variant="flat" style={{ width: "100%" }} size="lg">
                    Hire
                  </Button>
                  <div className="skills-badge-employee mt-4">
                    <h5>Skills</h5>
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
                  <div className="media-socials-employee mt-4">
                    <div className="row">
                      <small className="text-muted mt-2">
                        <AiOutlineMail /> test@gmail.com
                      </small>
                    </div>
                    <div className="row">
                      <small className="text-muted mt-2">
                        <FiInstagram /> @testIG
                      </small>
                    </div>
                    <div className="row">
                      <small className="text-muted mt-2">
                        <AiFillGithub /> @testgit
                      </small>
                    </div>
                    <div className="row">
                      <small className="text-muted mt-2">
                        <FiGitlab /> @testlab
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-8">
              <div className="card" style={{ width: "100%" }}>
                <div className="card-body">
                  <Tabs
                    defaultActiveKey="portofolio"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                  >
                    <Tab eventKey="portofolio" title="Portofolio">
                      <div className="row">
                        <div className="col-4">
                          <div className="card card-employee mb-4">
                            <img
                              crossOrigin="anonymous"
                              src={portoExample1}
                              className="card-img-top image-portofolio"
                              alt="..."
                            />
                            <h5 className="card-title name-portofolio">
                              Smartcity
                            </h5>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="card card-employee mb-4">
                            <img
                              crossOrigin="anonymous"
                              src={portoExample2}
                              className="card-img-top image-portofolio"
                              alt="..."
                            />
                            <h5 className="card-title name-portofolio">
                              Smartcity
                            </h5>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="card card-employee mb-4">
                            <img
                              crossOrigin="anonymous"
                              src={portoExample3}
                              className="card-img-top image-portofolio"
                              alt="..."
                            />
                            <h5 className="card-title name-portofolio">
                              Smartcity
                            </h5>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="card card-employee mb-4">
                            <img
                              crossOrigin="anonymous"
                              src={portoExample2}
                              className="card-img-top image-portofolio"
                              alt="..."
                            />
                            <h5 className="card-title name-portofolio">
                              Smartcity
                            </h5>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="card card-employee mb-4">
                            <img
                              crossOrigin="anonymous"
                              src={portoExample1}
                              className="card-img-top image-portofolio"
                              alt="..."
                            />
                            <h5 className="card-title name-portofolio">
                              Smartcity
                            </h5>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="card card-employee mb-4">
                            <img
                              crossOrigin="anonymous"
                              src={portoExample1}
                              className="card-img-top image-portofolio"
                              alt="..."
                            />
                            <h5 className="card-title name-portofolio">
                              Smartcity
                            </h5>
                          </div>
                        </div>
                      </div>
                    </Tab>
                    <Tab eventKey="pengalaman-kerja" title="Pengalaman Kerja">
                      <div className="row">
                        <div className="col-2">
                          <img
                            src={logoCompany}
                            alt=""
                            className="img-experience-portofolio"
                          />
                        </div>
                        <div className="col-9">
                          <h2>Engineer</h2>
                          <h4 className="text-muted">Tokopedia</h4>
                          <p className="text-muted">
                            July 2019 - January 2020 6 Monts
                          </p>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Vestibulum erat orci, mollis nec gravida sed,
                            ornare quis urna. Curabitur eu lacus fringilla,
                            vestibulum risus at.
                          </p>
                          <hr />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-2">
                          <img
                            src={logoCompany}
                            alt=""
                            className="img-experience-portofolio"
                          />
                        </div>
                        <div className="col-9">
                          <h2>Engineer</h2>
                          <h4 className="text-muted">Tokopedia</h4>
                          <p className="text-muted">
                            July 2019 - January 2020 6 Monts
                          </p>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Vestibulum erat orci, mollis nec gravida sed,
                            ornare quis urna. Curabitur eu lacus fringilla,
                            vestibulum risus at.
                          </p>
                        </div>
                      </div>
                    </Tab>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row" style={{ minHeight: "150vh" }}></div>
    </>
  );
};

export default ProfileEmployee;
