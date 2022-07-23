import React from "react";
import { Container } from "react-bootstrap";
import img from "../../Assets/Images/no-data-img.png";
import "./NoDataComp.css";

const NoDataComp = (props) => {
  return (
    <>
      <Container>
        <div className="wrapper-nodata">
          <div className="row text-center justify-content-center ">
            <img src={img} className="img-nodata" alt="..." />
            <h5 className="title-no-data">{props.title}</h5>
          </div>
        </div>
      </Container>
    </>
  );
};

export default NoDataComp;
