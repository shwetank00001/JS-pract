import React from 'react';
import ReactDOM from 'react-dom/client';
import {ReactMe} from './ReactMemoMethod/ReactMe';
import './index.css'
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ReactMe />
  </BrowserRouter>

  // <React.StrictMode>
  // </React.StrictMode>
);

