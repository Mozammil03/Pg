import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import { BrowserRouter } from 'react-router-dom'
import PathGen from './utils/PathGen.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <App />
    {/* <PathGen/> */}
    </BrowserRouter>
    {/* <Home/> */}
    
  </StrictMode>,
)
