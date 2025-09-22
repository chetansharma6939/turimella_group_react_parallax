import React from 'react'
export const CTA: React.FC = () => {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-4 py-20">
      <div className="rounded-2xl border border-white/10 p-6 bg-gradient-to-br from-indigo-500/10 to-cyan-500/10">
        <h2 className="text-3xl font-bold mb-2">Let’s build something useful.</h2>
        <p className="text-slate-300 mb-6">Tell us briefly what you’re building. We usually reply within 1–2 business days.</p>
        <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" className="grid gap-4 max-w-2xl">
          <input type="hidden" name="form-name" value="contact" />
          <p className="hidden"><label>Don’t fill this out: <input name="bot-field" /></label></p>
          <div className="grid sm:grid-cols-2 gap-4">
            <label className="grid gap-1 text-sm text-slate-300">Your name
              <input name="name" required placeholder="Your name"
                className="px-3 py-2 rounded-xl bg-slate-900/70 border border-white/10 outline-none focus:border-indigo-400" />
            </label>
            <label className="grid gap-1 text-sm text-slate-300">Email
              <input name="email" type="email" required placeholder="you@company.com"
                className="px-3 py-2 rounded-xl bg-slate-900/70 border border-white/10 outline-none focus:border-indigo-400" />
            </label>
          </div>
          <label className="grid gap-1 text-sm text-slate-300">Message
            <textarea name="message" rows={5} required placeholder="Tell us about your idea or project…"
              className="px-3 py-2 rounded-xl bg-slate-900/70 border border-white/10 outline-none focus:border-indigo-400" />
          </label>
          <button className="px-4 py-2 rounded-xl bg-white text-slate-900 font-semibold w-max">Send</button>
        </form>
        <p className="text-slate-400 text-sm mt-4">
          Prefer email? <a className="underline" href="mailto:info@theturimellagroup.com">info@theturimellagroup.com</a>
        </p>
      </div>
    </section>
  )
}
