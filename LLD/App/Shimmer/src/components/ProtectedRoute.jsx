import React, { Children } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Login } from "./Login";

const ProtectedRoute = ({ Children }) => {
  // Write Authentication logic
  // Make Login API call check if token valid
  const isAuthenticated = false;
  return isAuthenticated ? <Outlet /> : <Navigate to="/about" />;
};

export default ProtectedRoute;
