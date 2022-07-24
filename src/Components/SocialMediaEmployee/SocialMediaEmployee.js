import React from "react";
import "./SocialMediaEmployee.css";
import { FiInstagram } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";
import { FiGitlab } from "react-icons/fi";

const SocialMediaEmployee = (props) => {
  return (
    <>
      <div className="row">
        <small className="text-muted mt-2">
          <FiInstagram /> {props?.data?.instagram}
        </small>
      </div>
      <div className="row">
        <small className="text-muted mt-2">
          <AiFillGithub /> {props?.data?.github}
        </small>
      </div>
      <div className="row">
        <small className="text-muted mt-2">
          <FiGitlab /> {props?.data?.gitlab}
        </small>
      </div>
    </>
  );
};

export default SocialMediaEmployee;
