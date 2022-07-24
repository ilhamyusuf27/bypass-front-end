import { useEffect, useState, React } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaInstagram, FaRegEnvelope } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { FiLinkedin } from "react-icons/fi";
import { Link } from "react-router-dom";
import axios from "axios";
import "./ProfileCompany.css";

const Home = () => {
  const data = JSON.parse(localStorage.getItem("data"));
  const city = data.company_city;
  const description = data.company_description;
  const instagram = data.company_instagram;
  const linkedin = data.company_linkedin;
  const name = data.company_name;
  const rec_email = data.recruiter_email;
  const rec_id = data.recruiter_id;
  const rec_name = data.recruiter_name;
  const rec_phone = data.recruiter_phone;
  const rec_photo = data.recruiter_photo;
  const rec_position = data.recruiter_position;
  const role = data.role;
  const business_fields = data.business_fields;

  // const company_name = ;
  return (
    <>
      <Container className="mb-5">
        <Row>
          <div className="col-lg-12 col-sm-12">
            <div className="card hovercard mt-5">
              <div className="cardheader"></div>
              <div className="avatar-p-company">
                <img
                  src={rec_photo ?? "https://us.123rf.com/450wm/solarus/solarus2112/solarus211200026/178493166-default-image-icon-vector-missing-picture-page-for-website-design-or-mobile-app-no-photo-available-.jpg"}
                  alt=""
                />
              </div>
              <div className="info">
                <div className="title">
                  <h2>{name}</h2>
                  <small>{business_fields ?? "jenis bisnis"}</small>
                </div>
                <div className="desc">{city ?? "Kota"}</div>
              </div>

              <Container>
                <Row>
                  <Col md={{ span: 6, offset: 3 }}>
                    <div className="desc pb-4">
                      <small>
                        {description ?? "Deskripsi"}
                      </small>
                    </div>
                    <Link exact to="/edit-profile-company">
                      <Button
                        variant="primary"
                        size="lg"
                        className="button-edit"
                      >
                        Edit Profile
                      </Button>
                    </Link>
                  </Col>
                </Row>

                <div className="row pt-5 pb-5 social">
                  <Col md={{ span: 6, offset: 3 }}>
                    <table>
                      <tr>
                        <td>
                          {" "}
                          <h3>
                            <FaRegEnvelope />
                          </h3>{" "}
                        </td>
                        <td className="px-3">{rec_email}</td>
                      </tr>
                      <tr>
                        <td>
                          {" "}
                          <h3>
                            <FaInstagram />
                          </h3>{" "}
                        </td>
                        <td className="px-3">{instagram}</td>
                      </tr>
                      <tr>
                        <td>
                          {" "}
                          <h3>
                            <BsTelephone />
                          </h3>{" "}
                        </td>
                        <td className="px-3">{rec_phone}</td>
                      </tr>
                      <tr>
                        <td>
                          {" "}
                          <h3>
                            <FiLinkedin />
                          </h3>{" "}
                        </td>
                        <td className="px-3">{linkedin}</td>
                      </tr>
                    </table>
                  </Col>
                </div>
              </Container>
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Home;
