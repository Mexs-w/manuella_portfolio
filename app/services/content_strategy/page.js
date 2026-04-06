import React from 'react'
import Nav from '@/components/Nav'
// import About from '@/components/About'
import Footer from '@/components/Footer'
import Services from '@/components/Services'

const page = () => {
  return (
    <div className='overflow-x-hidden'>
        <Nav />
        <h2 className='pt-20'>Content Strategy</h2>
        <Services />
        <Footer />
    </div>
  )
}

export default page