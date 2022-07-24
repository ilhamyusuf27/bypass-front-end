import React from "react";
import { Button, Badge, Tab, Tabs, Container } from "react-bootstrap";
import { GoLocation } from "react-icons/go";
import { AiOutlineMail } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";
import { FiGitlab } from "react-icons/fi";
import { useParams } from "react-router-dom";

const DetailUserEmployee = (props) => {
  const { dataEmployee } = props;

  const idEmployee = useParams();

  return (
    <>
      <div className="col-4">
        <div className="card">
          <div className="text-center">
            <img
              src={dataEmployee?.user_photo}
              className="card-img-top profile-employee-img"
              alt="..."
            />
          </div>
          <div className="card-body mb-3">
            <h5 className="card-title">{dataEmployee?.name}</h5>
            <p>{dataEmployee?.job_title}</p>
            <p className="card-text">
              <small className="text-muted">
                <GoLocation /> {dataEmployee?.address}
              </small>
            </p>
            <small className="text-muted">{dataEmployee?.job_type}</small>
            <p className="card-text">
              <small className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum erat orci, mollis nec gravida sed, ornare quis urna.
                Curabitur eu lacus fringilla, vestibulum risus at.
              </small>
            </p>
            {dataEmployee?.is_hired ? null : (
              <Button variant="flat" style={{ width: "100%" }} size="lg">
                Hire
              </Button>
            )}

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
                  <AiOutlineMail /> {dataEmployee?.email}
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
    </>
  );
};

export default DetailUserEmployee;
