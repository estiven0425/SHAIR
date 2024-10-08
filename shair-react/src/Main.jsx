import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import App from './App'

createRoot(document.getElementById('raiz')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
