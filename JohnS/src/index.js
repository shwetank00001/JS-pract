import React from "react";
import ReactDOM from "react-dom/client";
import FirebaseLearning from "./Firebase Learning/Main";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <FirebaseLearning />
  </BrowserRouter>

  // <React.StrictMode>
  // </React.StrictMode>
);
