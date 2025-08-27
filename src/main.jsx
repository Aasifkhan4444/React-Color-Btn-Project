import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ColorBtn from './ColorBtn.jsx'
import ButtonColor from './ButtonColor.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <ColorBtn /> */}
    < ButtonColor />
  </StrictMode>,
)
