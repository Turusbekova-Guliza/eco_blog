import React from 'react'
import './Home.scss'
import Hero from '../../components/hero/Hero'
import About from '../../components/about/About'
import Active from '../../components/active/Active'
import Events from '../../components/events/Events'
import Karta from '../../components/Karta/Karta'
import Sponsor from '../../components/sponsor/Sponsor'

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Active />
      <Events />
      <Karta />
      <Sponsor />
    </>
  )
} 

export default Home