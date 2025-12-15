import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import SuspenseComponent from './suspense/SuspenseComponent'
import {BrowserRouter} from 'react-router'
import State from './hooks/state/State'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <SuspenseComponent />  
    </BrowserRouter>
  </StrictMode>,
)
