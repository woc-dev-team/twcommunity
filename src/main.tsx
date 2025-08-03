// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from '@material-tailwind/react'
import { BrowserRouter as BroweserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <BroweserRouter>
      <App />
    </BroweserRouter>
  </ThemeProvider>
)