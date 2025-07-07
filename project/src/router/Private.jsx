import React from "react";
import { globalContext } from "./globalContext";
import { Navigate } from "react-router";

export default function Private({ children }) {
  const { auth  } = React.useContext(globalContext);
  return auth ? children : <Navigate to={"/auth"} />;
}
