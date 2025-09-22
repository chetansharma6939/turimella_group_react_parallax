import React from 'react'
export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between text-sm text-slate-400">
        <p className="flex items-center gap-2">
          <img src="/tg-logo.svg" alt="" className="w-4 h-4" />
          <span>© {new Date().getFullYear()} The Turimella Group</span>
        </p>
        <a href="#top" className="hover:text-white">Back to top ↑</a>
      </div>
    </footer>
  )
}
