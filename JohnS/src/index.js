import React from "react";
import ReactDOM from "react-dom/client";
import RouterTest from "./RouterTest/RouterTest";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
//react-redux setup
import {Provider} from 'react-redux';   //provider acts like a bridge to connect react and redux
import { store } from "./ReduxTookKit/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <RouterTest />
    </Provider>
  </BrowserRouter>

  // <React.StrictMode>
  // </React.StrictMode>
);
