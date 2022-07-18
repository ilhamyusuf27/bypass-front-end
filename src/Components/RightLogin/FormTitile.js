import React from "react";
import "./RightLogin.css";

function FormTitle(props) {
  const { title, desc } = props;
  return (
    <>
      <h4 className="text-left">{title}</h4>
      <p className="text-left">{desc}</p>
    </>
  );
}

export default FormTitle;
