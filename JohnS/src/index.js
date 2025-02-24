import React from "react";
import ReactDOM from "react-dom/client";
import BasicsRevise from "./useEffect/CleanupPractise";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <BasicsRevise />
  </BrowserRouter>

  // <React.StrictMode>
  // </React.StrictMode>
);
