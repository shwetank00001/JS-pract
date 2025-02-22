import React from "react";
import ReactDOM from "react-dom/client";
// import Fetch from './Fetch/Test'
import CallbackHook from "./useCallback/CallbackHook";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <CallbackHook />
  </BrowserRouter>

  // <React.StrictMode>
  // </React.StrictMode>
);
