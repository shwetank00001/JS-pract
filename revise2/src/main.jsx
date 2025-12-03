import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Promise from './promise/PromiseTest'
import {BrowserRouter} from 'react-router'
import State from './hooks/state/State'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Promise />  
    </BrowserRouter>
  </StrictMode>,
)
