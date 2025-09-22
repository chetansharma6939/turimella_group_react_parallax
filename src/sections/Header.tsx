import React from 'react'
export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 backdrop-blur bg-slate-950/60">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-extrabold tracking-tight">
          <img src="/tg-logo.svg" alt="TG logo" className="w-6 h-6" />
          <span>The Turimella Group</span>
        </a>
        <nav className="hidden sm:flex items-center gap-5 text-slate-300 font-semibold">
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#contact" className="px-3 py-2 rounded-xl bg-white text-slate-900 hover:translate-y-[-1px] transition">Contact</a>
        </nav>
      </div>
    </header>
  )
}
