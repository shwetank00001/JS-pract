import React from "react";
import ReactDOM from "react-dom/client";
import ReducerRevise from "./useReducer/ReducerRevise";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ReducerRevise />
  </BrowserRouter>

  // <React.StrictMode>
  // </React.StrictMode>
);
