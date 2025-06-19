import React from "react";
import ReactDOM from "react-dom/client";
import Custom from "./customhookRevise/Custom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Custom />
  </BrowserRouter>

  // <React.StrictMode>
  // </React.StrictMode>
);
