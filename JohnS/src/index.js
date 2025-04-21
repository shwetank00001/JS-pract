import React from "react";
import ReactDOM from "react-dom/client";
import Test from "./Test";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Test />
  </BrowserRouter>

  // <React.StrictMode>
  // </React.StrictMode>
);
