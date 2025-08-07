import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { HelmetProvider } from 'react-helmet-async'

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);

// Signature interaction: pointer glow follows cursor (respects no JS on SSR)
window.addEventListener('pointermove', (e) => {
  document.body.style.setProperty('--x', `${e.clientX}px`)
  document.body.style.setProperty('--y', `${e.clientY}px`)
});
