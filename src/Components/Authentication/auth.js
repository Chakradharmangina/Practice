import React from "react";

export const Login = () => {
  if (localStorage.getItem("token")) {
    return true;
  } else {
    return false;
  }
};

export const Logout = () => {
  localStorage.clear();
};
