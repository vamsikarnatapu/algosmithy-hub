import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById("root")!).render(<App />);

// Signature interaction: pointer glow follows cursor (respects no JS on SSR)
window.addEventListener('pointermove', (e) => {
  document.body.style.setProperty('--x', `${e.clientX}px`)
  document.body.style.setProperty('--y', `${e.clientY}px`)
});
