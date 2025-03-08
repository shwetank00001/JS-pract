import React from "react";
import { GlobalContext } from "./GlobalContext";
import Signup from "./Signup";
import Details from "./Details";
import { Routes, Route } from "react-router-dom";
import Error from "./Error";
import Hero from "./Hero";
import Login from "./Login";
import { alldata } from "./data";

import ProtectedRoute from "./ProtectedRoute";

const Home = () => {

    const [isAuth, setAuth] = React.useState(false);
    const [name, setName] = React.useState()
    const [password, setPassword] = React.useState()
    const [products, setProducts] = React.useState(alldata)
    // const all = {}
  return (
    
    <GlobalContext.Provider value={{isAuth, setAuth, name, setName, password, setPassword, setProducts, products}}>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/details" element={
          <ProtectedRoute>
            <Details />
          </ProtectedRoute>
          } />
        <Route path="*" element={<Error />} />
      </Routes>
    </GlobalContext.Provider>
  );
};

export default Home;
