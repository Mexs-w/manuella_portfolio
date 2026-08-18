import React from 'react'
import Nav from '@/components/Nav'
// import About from '@/components/About'
import Footer from '@/components/Footer'
import Services from '@/components/Services'
import CopyWriting from '@/components/pages/CopyWriting'

const page = () => {
  return (
    <div className='overflow-x-hidden'>
        <Nav />
        {/* <h2 className='pt-20'>Content & Copy Writing</h2> */}
        <CopyWriting />
        <Services />
        <Footer />
    </div>
  )
}

export default page