import React, { useState } from "react";
import { Badge, Button } from "react-bootstrap";
import { GoLocation } from "react-icons/go";
import profileImg from "../../Assets/Images/profile image example.jpeg";

const EmployeesList = (props) => {
  const renderEmployeesList = () => {
    let jsx = props?.employeesList?.map((item) => {
      return (
        <>
          <div className="row mx-4">
            <div className="col-md-5">
              <div className="row g-0">
                <div className="col-md-4 align-self-center">
                  <div>
                    <img
                      src={item.user_photo}
                      className="img-fluid rounded-start img-user-home"
                      alt="..."
                    />
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="card-body body-user-home">
                    <h5 className="card-title">{item.name}</h5>
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
            <div className="col-md-7 d-flex justify-content-end align-items-center">
              <div className="col-md-2 ">
                <Button variant="flat">Lihat Profile</Button>
              </div>
            </div>
          </div>
          <hr className="hr-home" />
        </>
      );
    });
    return jsx;
  };

  renderEmployeesList();
  return (
    <>
      <div
        className="card mb-3 pb-2"
        style={{ maxWidth: "100%", border: "none" }}
      >
        {renderEmployeesList()}
      </div>
    </>
  );
};

export default EmployeesList;
