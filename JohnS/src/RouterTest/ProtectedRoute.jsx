import React, { useContext } from "react";
import { authContext } from "./authContext";
import { Navigate } from "react-router";

function ProtectedRoute({ children }) {
  const { auth } = useContext(authContext);

  return auth ? children : <Navigate to={"/login"} replace />;
}

export default ProtectedRoute;
