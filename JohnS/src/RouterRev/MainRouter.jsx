import React from "react";
import Home from "./Home";
import PersonalData from "./PersonalData";
import { Routes, Route } from "react-router-dom";
import { globalContext } from "./globalContext";
import Login from "./Login";
import ProtectedRoute from "./ProtectedRoute";

function MainRouter() {
  const [isAuth, setAuth] = React.useState(false);
  return (
    <globalContext.Provider value={{ isAuth, setAuth }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/personalData"
          element={
            <ProtectedRoute>
              <PersonalData />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </globalContext.Provider>
  );
}

export default MainRouter;
