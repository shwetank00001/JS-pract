import React from "react";
import ReactDOM from "react-dom/client";
import Theme from "./projects/ContextHook/Theme";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Theme />
  </BrowserRouter>

  // <React.StrictMode>
  // </React.StrictMode>
);
