import React from "react";
import About from "./About";
import People from "./People";
import { Routes, Route } from "react-router";
import Main from "./Main";
import Auth from "./Auth";

export default function Home() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/about" element={<About />} />
      <Route path="/people" element={<People />} />
      <Route path="/auth" element={<Auth />} />
    </Routes>
  );
}
