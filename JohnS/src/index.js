import React from "react";
import ReactDOM from "react-dom/client";
// import {ReactMe} from './ReactMemoMethod/ReactMe';
import Fetch from './Fetch/Fetch'
import "./index.css";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Fetch />
  </BrowserRouter>

  // <React.StrictMode>
  // </React.StrictMode>
);
