import React from "react";
import ReactDOM from "react-dom/client";
import ContextPraxr from "./useContext/ContextPraxt"
import "./index.css";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ContextPraxr />
  </BrowserRouter>

  // <React.StrictMode>
  // </React.StrictMode>
);
