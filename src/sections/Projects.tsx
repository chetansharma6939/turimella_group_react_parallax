import React from 'react'
import { motion } from 'framer-motion'
import { Parallax } from 'react-scroll-parallax'
export const Projects: React.FC = () => {
  const projects = [
    { title: 'Campaign Budget Tool', link: '#', desc: 'Scheduling and scaling for 20k+ monthly jobs across multiple clients, built with a pragmatic Kubernetes strategy.' },
    { title: 'Site Accelerator', link: '#', desc: 'Static-first brochure site stack with CDN and lighthouse 95+ scores.' },
    { title: 'Ops Automation', link: '#', desc: 'Back-office automations cutting weekly manual work by 60%.' },
  ]
  return (
    <section id="projects" className="relative">
      <Parallax speed={-5}>
        <div className="absolute inset-x-0 -top-20 h-40 bg-gradient-to-b from-indigo-500/10 to-transparent pointer-events-none" />
      </Parallax>
      <div className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-6">Recent projects</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {projects.map((p, i) => (
            <motion.article key={p.title} initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
              transition={{duration:.5, delay: i*.05}}
              className="rounded-2xl border border-white/10 p-5 bg-white/5 hover:bg-white/10 transition">
              <h3 className="font-bold">{p.title}</h3>
              <p className="text-slate-300 mt-1">{p.desc}</p>
              <a className="text-indigo-300 font-semibold mt-2 inline-block" href={p.link}>Learn more</a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
