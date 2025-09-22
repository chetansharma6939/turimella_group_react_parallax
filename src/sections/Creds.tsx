import React from 'react'
import { motion } from 'framer-motion'
export const Creds: React.FC = () => {
  const items = ['Lean delivery', 'Transparent', 'Outcome-first', 'Small teams']
  return (
    <section className="py-10 border-y border-white/10 bg-white/5">
      <div className="max-w-6xl mx-auto px-4 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-300">
        {items.map((i, idx)=>(
          <motion.span key={i} initial={{opacity:0,y:8}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
            transition={{duration:.4, delay: idx*.05}}
            className="px-3 py-1 rounded-full border border-white/10 bg-slate-900/40">{i}</motion.span>
        ))}
      </div>
    </section>
  )
}
