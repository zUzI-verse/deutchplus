import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from
"./features/auth/context/AuthContext"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider> // centralizing auth state and logic in a provider
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </AuthProvider>
  </StrictMode>,
)
