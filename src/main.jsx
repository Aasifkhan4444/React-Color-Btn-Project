import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import ColorBtn from './ColorBtn.jsx'
import ButtonColor from './ButtonColor.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <ColorBtn /> */}
    < ButtonColor />
  </StrictMode>,
)
