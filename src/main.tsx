import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { ParallaxProvider } from 'react-scroll-parallax'
import Lenis from 'lenis'
import App from './root/App'
import './styles/style.css'

function Root() {
  useEffect(() => {
   const lenis = new Lenis({ smoothWheel: true })
    const raf = (time: number) => { lenis.raf(time); requestAnimationFrame(raf) }
    requestAnimationFrame(raf)
  }, [])

  return (
    <ParallaxProvider>
      <App />
    </ParallaxProvider>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode><Root /></React.StrictMode>,
)
