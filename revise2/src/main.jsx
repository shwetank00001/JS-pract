import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import UseRed from './reducer/UseRed'
import {BrowserRouter} from 'react-router'
import State from './hooks/state/State'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <UseRed />  
    </BrowserRouter>
  </StrictMode>,
)
