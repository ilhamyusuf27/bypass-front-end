import React from "react";
import { Outlet } from "react-router";
import Footer from "../Footer/Footer";
import Navibar from "../Navbar/Navbar";

const WithNavFooter = () => {
  return (
    <>
      <Navibar />
      <Outlet />
      <Footer />
    </>
  );
};

export default WithNavFooter;
