import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './hooks/Context/Home'
import {BrowserRouter} from 'react-router'
import DebounceAPI from './hooks/debounce/DebounceAPI'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <DebounceAPI />  
    </BrowserRouter>
  </StrictMode>,
)
