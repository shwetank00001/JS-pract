import React from "react";
import ReactDOM from "react-dom/client";
import GrandParent from "./useContext/GrandParent";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <GrandParent />
  </BrowserRouter>

  // <React.StrictMode>
  // </React.StrictMode>
);
