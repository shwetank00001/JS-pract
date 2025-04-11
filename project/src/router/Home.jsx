import React from "react";
import About from "./About";
import People from "./People";
import { Routes, Route } from "react-router";
import Main from "./Main";
import Auth from "./Auth";
import Private from "./Private";
import { globalContext } from "./globalContext";

export default function Home() {
  const [auth, setAuth] = React.useState(false);
  return (
    <globalContext.Provider value={{ auth, setAuth }}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/people"
          element={
            <Private>
              <People />
            </Private>
          }
        />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </globalContext.Provider>
  );
}
