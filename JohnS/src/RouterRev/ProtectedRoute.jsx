import React from "react";
import { globalContext } from "./globalContext";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const { isAuth } = React.useContext(globalContext);
  return isAuth ? children : <Navigate to={"/login"} />;
}

export default ProtectedRoute;
