'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const Hero = () => {
  return (
    <section className="min-h-screen pt-28 flex items-center justify-center px-5 md:px-10 relative overflow-hidden">

      {/* BG IMAGE */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/assets/bg-grey.png"
          alt="bg"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/80"></div>
      </div>

      <div className="max-w-7xl w-full">
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.div
              variants={item}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-dark-primary w-fit mb-6 mx-auto md:mx-0"
            >
              <p>Hello</p>
              <img src="/assets/icons/hello.svg" alt="hello" />
            </motion.div>

            <motion.h2
              variants={item}
              className="font-heading text-4xl md:text-6xl leading-tight max-w-3xl text-center md:text-start"
            >
              I’m <span className="text-primary">Manuella</span>,<br />
              I Craft Designs & Grow Brands
            </motion.h2>

            <motion.p
              variants={item}
              className="text-lg md:text-xl mt-5 max-w-xl text-center lg:text-start mx-auto md:mx-0"
            >
              From visuals to strategy, I turn ideas into scroll-stopping content.
            </motion.p>

            <motion.div
              variants={item}
              className="flex flex-wrap gap-4 mt-8 justify-center md:justify-start"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="#contact"
                  className="px-6 py-3 bg-primary text-white rounded-full font-medium"
                >
                  Let’s Talk
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="#work"
                  className="px-6 py-3 bg-secondary text-white rounded-full font-medium"
                >
                  See My Works
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 80, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex justify-center md:justify-end"
          >
            <img
              src="/assets/hero-img.png"
              alt="Manuella hero"
              className="w-[80%] md:w-[90%] object-contain animatepulse"
            />
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Hero
