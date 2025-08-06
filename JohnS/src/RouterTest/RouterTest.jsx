import React from "react";
import Welcome from "./Welcome";
import Home from "./Home";
import UserData from "./UserData";

import { Routes, Route } from "react-router";

function RouterTest() {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/welcome"} element={<Welcome />} />
      <Route path={"/welcome/:name"} element={<UserData />} />
    </Routes>
  );
}

export default RouterTest;
