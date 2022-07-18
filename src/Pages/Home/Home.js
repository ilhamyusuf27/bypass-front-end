import React from "react";
import Footer from "../../Components/Footer/Footer";
import Navibar from "../../Components/Navbar/Navbar";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Navibar />
      <div className="row bg-home-title">
        <h3 className="py-3 wrapper-home text-white">Top Jobs</h3>
      </div>
      <Footer />
    </>
  );
};

export default Home;
