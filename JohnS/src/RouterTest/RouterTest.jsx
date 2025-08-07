import React from "react";
import Welcome from "./Welcome";
import Home from "./Home";
import UserData from "./UserData";
import Login from "./Login";
import Signup from "./Signup";
import SecretData from "./SecretData";

import { authContext } from "./authContext";
import ProtectedRoute from "./ProtectedRoute";

import { Routes, Route } from "react-router";
import { useState } from "react";

function RouterTest() {
  const [auth, setAuth] = useState(false);
  return (
    <authContext.Provider value={{ auth, setAuth }}>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/welcome"} element={<Welcome />} />
        <Route path={"/welcome/:name"} element={<UserData />} />
        <Route path={"/signup"} element={<Signup />} />
        <Route path={"/login"} element={<Login />} />
        <Route
          path={"/secretdata"}
          element={
            <ProtectedRoute>
              <SecretData />
            </ProtectedRoute>
          }
        />
      </Routes>
    </authContext.Provider>
  );
}

export default RouterTest;
