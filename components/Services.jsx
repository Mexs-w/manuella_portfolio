'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

const otherServices = [
  {
    icon: '/assets/icons/graph.svg',
    title: 'Content Strategy',
    text: 'Campaign planning & performance-focused strategies',
    link: '/services/content_strategy',
  },
  {
    icon: '/assets/icons/paint.svg',
    title: 'Graphics Design',
    text: 'Scroll-stopping visuals, brand designs & promos',
    link: '/works',
  },
  {
    icon: '/assets/icons/handwritting.svg',
    title: 'Content & Copywriting',
    text: 'Captions, content ideas & brand storytelling',
    link: '/services/content_writing',
  },
]

const Services = () => {
  return (
    <section className="relative py-24 px-5 md:px-10 flex items-center justify-center">

      {/* BG IMAGE */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/assets/services.png"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#5B2D8B]/85" />
      </div>

      <div className="max-w-7xl w-full z-10">

        {/* SECTION TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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
          viewport={{ once: true }}
        >
          {/* FEATURED SERVICE — the only one that gets the glass treatment */}
          <motion.div variants={item}>
            <Link
              href="/services/platform_management"
              className="group block bg-white/15 backdrop-blur-md text-white rounded-3xl px-8 py-8 md:px-10 md:py-10 border border-white/20 hover:bg-white/20 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <img src="/assets/icons/brain.svg" className="w-14 h-14 shrink-0" alt="" />
                <div>
                  <h5 className="text-2xl font-semibold">Platform Management</h5>
                  <p className="mt-2 text-lg leading-relaxed text-white/85 max-w-2xl">
                    Instagram, TikTok, Facebook, LinkedIn & YouTube planning,
                    posting, engagement & analytics.
                  </p>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* OTHER SERVICES — a quiet divided list, not three more cards */}
          <motion.div
            variants={item}
            className="mt-4 grid md:grid-cols-3 divide-y divide-white/15 md:divide-y-0 md:divide-x border-t border-white/15 md:border-t-0"
          >
            {otherServices.map((service, i) => (
              <Link
                key={i}
                href={service.link}
                className="group py-8 md:px-8 first:md:pl-0 last:md:pr-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <img src={service.icon} className="w-8 h-8" alt="" />
                  <h5 className="text-lg font-semibold text-white">
                    {service.title}
                  </h5>
                </div>
                <p className="mt-3 leading-relaxed text-white/75 group-hover:text-white/95 transition-colors">
                  {service.text}
                </p>
              </Link>
            ))}
          </motion.div>

          <motion.div variants={item} className="mt-16 text-center flex justify-center md:text-left">
            <Link
              href="tel:+2348051185971"
              className="inline-block px-6 py-3 bg-secondary text-white rounded-full font-medium hover:scale-105 transition"
            >
              Book a call
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services