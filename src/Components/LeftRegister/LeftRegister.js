import React from "react";

function LeftLogin() {
  return (
    <>
      <div className="col-sm-6 px-0 d-none d-sm-block">
        <div className="background">
          <div className="opacity"></div>
          <img
            src={require("../../Assets/Images/brandWhite.png")}
            alt="Logo login"
            className="logo-login"
          />
          <img
            src={require("../../Assets/Images/tag.png")}
            alt="Logo login"
            className="tagline-login"
          />
        </div>
      </div>
    </>
  );
}

export default LeftLogin;
