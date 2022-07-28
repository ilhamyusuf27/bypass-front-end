import React from "react";
import "./LandingPage1.css";
import { Container, Button } from "react-bootstrap";
import imgBanner from "../../Assets/Images/banner.png";
import { Link } from "react-router-dom";

const LandingPage1 = () => {
  return (
    <>
      <div className="banner-bg">
        <Container>
          <div className="row align-items-center">
            <div className="col-6">
              <div className="title-banner">
                <h2>Talenta terbaik negri untuk perubahan revolusi 4.0</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  euismod ipsum et dui rhoncus auctor.
                </p>
                <Link to="/register-company">
                  <Button variant="flat" size="lg" className="text-bold px-4">
                    Mulai Dari Sekarang
                  </Button>
                </Link>
              </div>
            </div>
            <div className="col-6">
              <img src={imgBanner} alt="img-banner" />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default LandingPage1;
