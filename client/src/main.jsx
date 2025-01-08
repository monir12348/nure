import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import RouterSetup from './RouterSetup.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    
  <RouterSetup/>
    
    
  </StrictMode>,
)
