import React from 'react'
import { motion } from 'framer-motion'
import { Parallax } from 'react-scroll-parallax'
import HeroGraphic from './HeroGraphic'

export const Hero: React.FC = () => {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <Parallax speed={-10}>
          <div className="absolute -top-20 right-[-10%] w-[42rem] h-[42rem] rounded-full blur-3xl opacity-40 bg-indigo-600" />
        </Parallax>
        <Parallax speed={6}>
          <div className="absolute top-10 left-[-10%] w-[30rem] h-[30rem] rounded-full blur-3xl opacity-30 bg-cyan-500" />
        </Parallax>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-20 sm:py-28 grid sm:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{duration:.6}}
            className="text-4xl sm:text-6xl font-extrabold leading-[1.05] tracking-tight">
            Modern solutions.<br/><span className="text-indigo-400">Family-driven execution.</span>
          </motion.h1>
          <motion.p initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{duration:.7,delay:.1}}
            className="mt-4 text-slate-300 max-w-prose">
            We’re a small, fast-moving group of cousins building practical, reliable products and services.
            From idea to launch, we focus on outcomes that matter.
          </motion.p>
          <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{duration:.7,delay:.2}}
            className="mt-6 flex gap-3">
            <a href="#services" className="px-4 py-2 rounded-xl bg-white text-slate-900 font-semibold">Explore Services</a>
            <a href="#contact" className="px-4 py-2 rounded-xl border border-white/15 font-semibold hover:bg-white/5">Work with us</a>
          </motion.div>
          <div className="mt-4 text-slate-400 text-sm">Independent • Pragmatic • Delivery-focused</div>
        </div>
        <HeroGraphic />
      </div>
    </section>
  )
}
