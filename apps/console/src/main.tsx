import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Home } from './pages/home'
import './style.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='bg-background text-foreground antialiased'>
      <Home />
    </div>
  </StrictMode>,
)
