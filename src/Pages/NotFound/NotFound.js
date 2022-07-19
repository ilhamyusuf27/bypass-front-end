import React from "react";
import notFoundImg from "../../Assets/Images/404-error.png";
import "./NotFound.css";

const NotFound = () => {
  return (
    <>
      <div className="not-found-wrapper d-flex justify-content-center text-center">
        <img src={notFoundImg} className="not-found-img" alt="" />
      </div>
    </>
  );
};

export default NotFound;
