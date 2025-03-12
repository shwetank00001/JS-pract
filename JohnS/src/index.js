import React from "react";
import ReactDOM from "react-dom/client";
import MainRouter from "./RouterRev/MainRouter";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <MainRouter />
  </BrowserRouter>

  // <React.StrictMode>
  // </React.StrictMode>
);
