import React from 'react'
import { motion } from 'framer-motion'
export const Services: React.FC = () => {
  const items = [
    { title: 'Product & Websites', desc: 'From landing pages to full-stack apps, we design, build, and deploy fast.' },
    { title: 'Automation', desc: 'We streamline repetitive work with scripts, no-code, and API integrations.' },
    { title: 'Advisory', desc: 'Lightweight consulting to help scope, prioritize, and execute.' },
  ]
  return (
    <section id="services" className="max-w-6xl mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold mb-6">Services</h2>
      <div className="grid sm:grid-cols-3 gap-4">
        {items.map((it, i)=> (
          <motion.div key={it.title} initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
            transition={{duration:.5, delay: i*.05}}
            className="rounded-2xl border border-white/10 p-5 bg-white/5 hover:bg-white/10 transition">
            <h3 className="font-bold mb-1">{it.title}</h3>
            <p className="text-slate-300">{it.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
