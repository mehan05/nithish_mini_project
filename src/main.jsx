import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ContextProvider from './context/ContextProvider.jsx'
import { RecoilRoot } from 'recoil'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <RecoilRoot>
      <ContextProvider>
        <App />
      </ContextProvider>
      </RecoilRoot>
    </BrowserRouter>
  </StrictMode>
)
