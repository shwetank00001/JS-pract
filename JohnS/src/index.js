import React from "react";
import ReactDOM from "react-dom/client";
import Debounce from "./DebounceAndThrottling/Debounce";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Debounce />
  </BrowserRouter>

  // <React.StrictMode>
  // </React.StrictMode>
);
