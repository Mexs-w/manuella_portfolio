import React from 'react'
import Link from 'next/link'
import { FaFacebookF } from 'react-icons/fa'
import { Linkedin, Facebook, Instagram, MessageCircle } from 'lucide-react'



const Footer = () => {
  return (
    <section className="py-12 md:px-10 px-5 bg-dark-primary text-white w-full">
      <footer className="max-w-7xl w-full mx-auto">

        {/* TOP CTA */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="grid flexcol md:flexrow items-center gap-6">
            <div>
              <h3 className="text-2xl font-heading">Let’s work together</h3>
              <p className="text-white/70">Ready to grow your brand online?</p>
            </div>

            <div className="flex items-center gap-5">
              <a href="https://www.instagram.com/manuela_osazuwa/" aria-label="Instagram">
                {/* <img
                  src="/assets/icons/instagram.svg"
                  alt="Instagram icon"
                  className="h-8 w-8 cursor-pointer hover:scale-110 transition-transform"
                /> */}
                <Instagram size={30} className='cursor-pointer hover:scale-110 transition-transform text-[#F5C400]' />

              </a>
              <a href="https://wa.me/2348051185971?text=Hi,%20I'm%20_______%20in%20can%20you%20help%20me%20with%20_______" aria-label="WhatsApp">
                {/* <img
                  src="/assets/icons/whatsapp.svg"
                  alt="WhatsApp icon"
                  className="h-8 w-8 cursor-pointer hover:scale-110 transition-transform"
                /> */}
                <MessageCircle size={30} className='cursor-pointer hover:scale-110 transition-transform text-[#F5C400]' />
              </a>
              <a href="#" aria-label="Email">
                {/* <img
                  src="/assets/icons/mail.svg"
                  alt="Mail icon"
                  className="h-8 w-8 cursor-pointer hover:scale-110 transition-transform"
                /> */}
                <Facebook size={30} className='cursor-pointer hover:scale-110 transition-transform text-[#F5C400]' />
              </a>
              <a href="https://ng.linkedin.com/in/manuela-osazuwa-713aa025b" aria-label="Email">
                {/* <img
                  src="/assets/icons/mail.svg"
                  alt="Mail icon"
                  className="h-8 w-8 cursor-pointer hover:scale-110 transition-transform"
                /> */}
                <Linkedin size={30} className='cursor-pointer hover:scale-110 transition-transform text-[#F5C400]' />
              </a>
            </div>
          </div>

          {/* FOOTER NAV */}
          <ul className="flex gap-8 items-center text-white/70">
            <li><Link href="/" className="hover:text-white transition">Home</Link></li>
            <li><Link href="/about" className="hover:text-white transition">About</Link></li>
            {/* <li><Link href="/" className="hover:text-white transition">Services</Link></li> */}
            <li><Link href="/works" className="hover:text-white transition">Works</Link></li>
          </ul>
        </div>

        {/* DIVIDER */}
        <hr className="my-8 border-white/20" />

        {/* CREDIT */}
        <div className="text-center">
          <p className="text-sm text-white/60">
            Built and Designed by <a href='https://iamelijah.vercel.app/' target='_blank' className="underline cursor-pointer">Mexs</a>
          </p>
        </div>

      </footer>
    </section>
  )
}

export default Footer
