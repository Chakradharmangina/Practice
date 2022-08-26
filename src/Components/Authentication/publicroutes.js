import React from "react";
import { Navigate } from "react-router-dom";
import { Login } from "./auth";

const Publicroutes = ({ component: Component, ...rest }) => {
  if (Login()) {
    return <Navigate to="/Dashboard" />;
  }
  return <Component {...rest} />;
};

export default Publicroutes;
