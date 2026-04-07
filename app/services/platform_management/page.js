import React from 'react'
import Nav from '@/components/Nav'
// import About from '@/components/About'
import Footer from '@/components/Footer'
import Services from '@/components/Services'
import PlatformManagement from '@/components/pages/PlatformManagement'

const page = () => {
  return (
    <div className='overflow-x-hidden'>
        <Nav />
        <PlatformManagement />
        <Services />
        <Footer />
    </div>
  )
}

export default page