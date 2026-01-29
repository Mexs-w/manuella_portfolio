import React from 'react'
import Nav from '@/components/Nav'
import Works from '@/components/Works'
import Footer from '@/components/Footer'
import Services from '@/components/Services'

const page = () => {
  return (
    <div>
        <Nav />
        <Works page={true} />
        <Services />
        <Footer />
    </div>
  )
}

export default page