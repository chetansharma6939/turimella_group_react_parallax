import React from 'react'
import { motion } from 'framer-motion'

export const Creds: React.FC = () => {
  const items = ['Lean delivery', 'Transparent', 'Outcome-first', 'Small teams']
  const projectHighlights = [
    'Built a conversational chatbot for a sports academy',
    'Automates FAQs, bookings and lead capture',
    'Integrates scheduling and personalized coaching recommendations',
    'Reduces manual workload and improves customer outreach and conversion'
  ]

  return (
    <section className="py-12 border-y border-white/10 bg-gradient-to-b from-white/3 to-transparent">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl bg-slate-900/30 border border-white/6 p-6 md:p-8 shadow-xl"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="md:flex-1">
              <h3 className="text-lg md:text-xl font-semibold text-white">Project highlight — SoCal Table Tennis Chatbot</h3>
              <p className="mt-2 text-sm text-slate-300 max-w-prose">
                I built an intelligent chatbot to drive efficiency and improve customer outreach for a SoCal academy.
                The system handles 24/7 enquiries, automates bookings, captures leads, and surfaces personalized
                coaching suggestions — freeing staff to focus on high-value work and increasing conversions.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {items.map((i, idx) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.04 }}
                  className="px-3 py-1 rounded-full border border-white/10 bg-slate-800/50 text-slate-200 text-xs"
                >
                  {i}
                </motion.span>
              ))}
            </div>
          </div>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.12 }}
            className="mt-5 grid gap-2 text-sm text-slate-300"
          >
            {projectHighlights.map((h) => (
              <li key={h} className="flex items-start gap-3">
                <span className="mt-1 text-amber-400">•</span>
                <span>{h}</span>
              </li>
            ))}
          </motion.ul>

          <div className="mt-6 flex items-center justify-between gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-amber-500/95 px-4 py-2 text-sm font-medium text-slate-900 shadow hover:brightness-95"
            >
              View related projects
            </a>

            <p className="text-xs text-slate-400">Outcome: faster response times, higher lead capture and improved customer satisfaction.</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
