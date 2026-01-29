'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
//   { name: 'Services', href: '#services' },
  { name: 'Work', href: '/works' },
]

const Nav = () => {
  const [open, setOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-black/5"
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-5 md:px-10 py-4">
        
        {/* Logo */}
        <Link href="/">
          <h2 className="font-body text-3xl font-semibold">
            Ella<span className="text-primary">.</span>
          </h2>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8 px-8 py-2 rounded-full bg-[#DBDBDB]/30">
          {navLinks.map((link, index) => (
            <motion.li
              key={index}
              whileHover={{ y: -2 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="relative"
            >
              <Link
                href={link.href}
                className="px-4 py-1 rounded-full text-sm font-medium hover:text-primary transition"
              >
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link href="#contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2 bg-primary text-white rounded-full font-medium"
            >
              Contact
            </motion.button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="md:hidden bg-white px-5 pb-6 min-h-screen"
          >
            <ul className="flex flex-col gap-5 mt-4">
              {navLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 6 }}
                  className="text-lg font-medium"
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>

            <Link href="#contact">
              <button className="mt-6 w-full px-5 py-3 bg-primary text-white rounded-full font-medium">
                Contact
              </button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Nav
