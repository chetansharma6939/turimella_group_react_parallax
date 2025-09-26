import React from 'react'
import { Parallax } from 'react-scroll-parallax'
import TgLogo from '../icons/TgLogo'

// A small visual component for the hero right-side graphic.
export const HeroGraphic: React.FC = () => {
  return (
    <div aria-hidden className="h-80 sm:h-[28rem] rounded-3xl border border-white/10 shadow-2xl flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-600/5 to-cyan-400/5">
      <Parallax translateY={[-28, 28]}>
        <div className="transform-gpu will-change-transform">
          <div className="transition-transform duration-500 hover:scale-100 w-full h-full flex items-center justify-center">
            <div className="w-full h-full">
              <TgLogo className="w-full h-full" />
            </div>
            {/*
              Fallback guidance:
              To support older browsers or avoid SVG animation for some environments,
              add a <picture> element with /tg-logo.webp and /tg-logo.png in /public.
            */}
            <noscript>
              <img src="/tg-logo.png" alt="TG logo" className="w-[240px] h-[240px]" />
            </noscript>
          </div>
        </div>
      </Parallax>
    </div>
  )
}

export default HeroGraphic
