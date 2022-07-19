import React from "react";
import { Outlet } from "react-router";

const WithoutNavFooter = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default WithoutNavFooter;
