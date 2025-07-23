import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./Zustand/Main";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
//react-redux setup
import {Provider} from 'react-redux';   //provider acts like a bridge to connect react and redux
import { store } from "./ReduxTookKit/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Main />
    </Provider>
  </BrowserRouter>

  // <React.StrictMode>
  // </React.StrictMode>
);
