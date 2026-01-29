'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const card = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

const Services = () => {
  return (
    <section className="relative py-24 px-5 md:px-10 flex items-center justify-center">

      {/* BG IMAGE */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/assets/services.png"
          alt="services background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/70" />
      </div>

      <div className="max-w-7xl w-full z-10">

        {/* SECTION TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        //   viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl text-white">Services</h2>
          <hr className="my-3 h-0.5 w-16 mx-auto bg-secondary border-0 rounded-full" />
        </motion.div>

        {/* SERVICES */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
        //   viewport={{ once: true }}
          className="flex flex-col items-center gap-12"
        >
          {/* FEATURED SERVICE */}
          <motion.div
            variants={card}
            className="bg-white/40 backdrop-blur-md text-white rounded-3xl px-8 py-6 max-w-xl w-full hover:-translate-y-2 transition min-h-50"
          >
            <div className="flex items-center gap-4 border-b border-white/50 pb-4">
              <img src="/assets/icons/brain.svg" className="w-12 h-12" />
              <h5 className="text-2xl font-semibold">
                Social Media Management
              </h5>
            </div>
            <p className="mt-5 text-lg leading-relaxed">
              Instagram, TikTok, Facebook, LinkedIn & YouTube planning,
              posting, engagement & analytics.
            </p>
          </motion.div>

          {/* OTHER SERVICES */}
          <div className="grid md:grid-cols-3 gap-8 w-full">
            {[
              {
                icon: '/assets/icons/graph.svg',
                title: 'Content Strategy',
                text: 'Campaign planning & performance-focused strategies',
              },
              {
                icon: '/assets/icons/paint.svg',
                title: 'Graphics Design',
                text: 'Scroll-stopping visuals, brand designs & promos',
              },
              {
                icon: '/assets/icons/handwritting.svg',
                title: 'Content & Copywriting',
                text: 'Captions, content ideas & brand storytelling',
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                variants={card}
                whileHover={{ y: -8, scale: 1.02 }} 
                className={`bg-white/30 backdrop-blur-md text-white rounded-3xl px-7 py-6 transition min-h-50 ${i === 1 ? 'md:mb-10' : 'md:mt-10'}`}
              >
                <div className={`flex items-center gap-4 border-b border-white/40 pb-4`}>
                  <img src={service.icon} className="w-10 h-10" />
                  <h5 className="text-xl lg:text-2xl font-semibold">
                    {service.title}
                  </h5>
                </div>
                <p className="mt-4 leading-relaxed">
                  {service.text}
                </p>
              </motion.div>
            ))}
          </div>

        <Link href="/" className="inline-block px-6 py-3 bg-secondary text-white rounded-full font-medium hover:scale-105 transition">Contact me</Link>

        </motion.div>
      </div>
    </section>
  )
}

export default Services