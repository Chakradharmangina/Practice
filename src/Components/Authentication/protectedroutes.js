import React from "react";
import { Navigate } from "react-router-dom";
import { Login } from "./auth";

const Protectedroutes = ({ component: Component, ...rest }) => {
  if (Login()) {
    return <Component {...rest} />;
  }
  return <Navigate to="/" />;
};

export default Protectedroutes;
