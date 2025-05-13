import React from "react";
import ReactDOM from "react-dom/client";
import Cookie from "./cookieAuth/Cookie";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Cookie />
  </BrowserRouter>

  // <React.StrictMode>
  // </React.StrictMode>
);
