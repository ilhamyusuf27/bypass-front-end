import React from "react";
import "./Footer.css";
import brandFooter from "../../Assets/Images/brandFooter.png";

const Footer = () => {
  return (
    <>
      <div className="wrapper-footer">
        <div className="row">
          <div className="wrapper-home" style={{ paddingTop: "120px" }}>
            <img src={brandFooter} alt="" />
            <p className="mt-3 text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              euismod ipsum et dui rhoncus auctor.
            </p>
            <hr style={{ color: "white" }} />
            <div className="row">
              <div className="col-4 text-white">
                <p>2020 Pewworld. All right reserved</p>
              </div>
              <div className="col-7 text-white text-end">
                <p>Telepon</p>
              </div>
              <div className="col-1 text-white text-end">
                <p>Email</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
