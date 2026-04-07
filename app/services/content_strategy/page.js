import React from 'react'
import Nav from '@/components/Nav'
// import About from '@/components/About'
import Footer from '@/components/Footer'
import Services from '@/components/Services'
import ContentStrategy from '@/components/pages/ContentStrategy'

const page = () => {
  return (
    <div className='overflow-x-hidden'>
        <Nav />
        <ContentStrategy />
        <Services />
        <Footer />
    </div>
  )
}

export default page