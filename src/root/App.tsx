import React from 'react'
import { Header } from '../sections/Header'
import { Hero } from '../sections/Hero'
import { Creds } from '../sections/Creds'
import { Services } from '../sections/Services'
import { Projects } from '../sections/Projects'
import { CTA } from '../sections/CTA'
import { Footer } from '../sections/Footer'

export default function App(){
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Creds />
        <Services />
        <Projects />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
