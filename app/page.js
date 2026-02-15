import React from 'react'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Works from '@/components/Works'
import Footer from '@/components/Footer'

const page = () => {
  return (
    <div className='overflow-x-hidden'>
      <Nav />
      <Hero />
      <About />
      <Services />
      <Works />
      <Footer />
    </div>
  )
}

export default page