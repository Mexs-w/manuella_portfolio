import React from 'react'
import Nav from '@/components/Nav'
import About from '@/components/About'
import Footer from '@/components/Footer'
import Services from '@/components/Services'

const page = () => {
  return (
    <div>
        <Nav />
        <About page={true} />
        <Services />
        <Footer />
    </div>
  )
}

export default page