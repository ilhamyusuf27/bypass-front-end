import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const PortofolioEmployee = (props) => {
  const renderPortofolio = () => {
    let jsx = props?.data?.map((item) => {
      return (
        <>
          <div className="col-4">
            <div
              className="card card-employee mb-4"
              onClick={() => window.open(item?.image)}
            >
              <img
                crossOrigin="anonymous"
                src={item?.image}
                className="card-img-top image-portofolio"
                alt="..."
              />
              <h5 className="card-title name-portofolio">
                {item?.aplication_title}
              </h5>
            </div>
          </div>
        </>
      );
    });
    return jsx;
  };

  return (
    <>
      <div className="row">{renderPortofolio()}</div>
    </>
  );
};

export default PortofolioEmployee;
