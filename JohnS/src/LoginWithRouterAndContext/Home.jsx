import React from "react";
import { GlobalContext } from "./GlobalContext";
import Signup from "./Signup";
import Details from "./Details";
import { Routes, Route } from "react-router-dom";
import Error from "./Error";
const Home = () => {
  return (
    <Routes>
      <Route path="/login" element={<Signup />} />
      <Route path="/details" element={<Details />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default Home;
