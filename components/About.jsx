'use client'

import React from 'react'
import Link from 'next/link'
import Marquee from 'react-fast-marquee'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const slideRight = {
  hidden: { opacity: 0, x: 60, scale: 0.95 },
  show: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.7, ease: 'easeOut' } },
}

const About = ({page}) => {
  return (
    <section
      id="about"
      className={`${page ? "py-25" : "py-20" } flex items-center justify-center px-5 md:px-10 bg-white relative`}
    >
      <div className="max-w-7xl w-full mx-auto">

        {/* Section Title */}
        <motion.div
          initial="hidden"
          whileInView="show"
        //   viewport={{ once: true }}
          variants={fadeUp}
          className="mx-auto text-center w-fit"
        >
          <h2 className="font-heading text-4xl text-primary">
            About Me
          </h2>
          <hr className="my-2 h-0.5 w-16 mx-auto rounded-full bg-secondary border-0" />
        </motion.div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center my-14">

          {/* LEFT (TEXT) */}
          <motion.div
            initial="hidden"
            whileInView="show"
            // viewport={{ once: true }}
            variants={fadeUp}
            className="order-2 md:order-2"
          >
            <p className="font-body text-lg md:text-xl leading-relaxed mb-8 max-w-xl order2">
              My name is Osazuwa Manuela Oghogho, a creative graphics designer and social media
              manager with experience in visual design, content creation,
              copywriting, and social media strategy. I help brands build a
              strong online presence through thoughtful design and engaging
              content across platforms such as Instagram, Facebook, TikTok,
              LinkedIn, and YouTube.
            </p>
            {page && <p className="font-body text-lg md:text-xl leading-relaxed mb-8 max-w-xl order2">
             I’m passionate about creating visuals and content that not only look good but also communicate clearly and drive results. With hands-on experience managing social media pages and designing brand assets, I have helped businesses improve their visibility, connect with their audience, and maintain a consistent brand identity online.
            </p>}
           {page && <p className="font-body text-lg md:text-xl leading-relaxed mb-8 max-w-xl order2">
              Over time, I have worked on a variety of projects ranging from social media campaigns to promotional graphics and content strategies for different brands. These experiences have strengthened my ability to blend creativity with strategy, ensuring every design and piece of content serves a clear purpose.
            </p>}
           {page && <p className="font-body text-lg md:text-xl leading-relaxed mb-8 max-w-xl order2">
              Beyond work, I enjoy exploring creative ideas, staying inspired by digital trends, and continuously improving my skills to deliver better results for the brands I work with.
            </p>}

            {!page && <Link
              href="/about"
              className="inline-block px-6 py-3 bg-primary text-white rounded-full font-medium hover:scale-105 transition"
            >
              Read more
            </Link>}
          </motion.div>

          {/* RIGHT (IMAGE) */}
          <motion.div
            initial="hidden"
            whileInView="show"
            // viewport={{ once: true }}
            variants={slideRight}
            className="flex justify-center order-1 md:order-1 overflow-hidden"
          >
            <img
              src="/assets/about.png"
              alt="Manuella about"
              className="w-[85%] md:w-[95%] object-contain hover:scale-105 transition-all"
            />
          </motion.div>
        </div>

        {/* BRANDS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        //   viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center gap-6 rounded-3xl bg-white shadow-sm px-6 md:px-10 py-8"
        >
          <div className="md:border-r-2 md:border-b-0 border-secondary border-b-2 pr-6 w-full lg:w-auto py-2 px-2">
            <h5 className="text-xl md:text-2xl text-center md:text-left">
              Some of the brands I’ve worked with
            </h5>
          </div>

          <div className="w-full overflow-hidden">
            <Marquee
              className="w-full"
              pauseOnHover
              gradient={false}
            >
              {[
                "/assets/brands_logos/logoipsum.png",
                "/assets/brands_logos/novak.webp",
                "/assets/brands_logos/remys.png",
                "/assets/brands_logos/logoipsum.png",
                "/assets/brands_logos/novak.webp",
                "/assets/brands_logos/remys.png",
                "/assets/brands_logos/logoipsum.png",
                "/assets/brands_logos/novak.webp",
                "/assets/brands_logos/remys.png"
              ].map((image, i) => (
                <img
                  key={i}
                  src={image}
                  alt="brand logo"
                  className="h-10 mx-6 opacity-80 hover:opacity-100 transition"
                />
              ))}
            </Marquee>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        //   viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center gap-6 rounded-3xl bgwhite shadowsm px-6 md:px-10 my-8 py-5"
        >
          <div className="w-full overflow-hidden">
            <Marquee
              className="w-full"
              pauseOnHover
              gradient={false}
              direction='right'
            >
              {[
                "/assets/brand_promotion/1.jpg",
                "/assets/brand_promotion/2.jpg",
                "/assets/brand_promotion/3.jpg",
                "/assets/brand_promotion/4.jpg",
                "/assets/sms/5.jpg",
                "/assets/sms/1.jpg",
                "/assets/sms/2.jpg",
                "/assets/sms/3.jpg",
                "/assets/event_and_church/3.jpg",
              ].map((image, i) => (
                <img
                  key={i}
                  src={image}
                  alt="brand logo"
                  className="h-52 w-48 mx-6 opacity-80 hover:opacity-100 transition object-cover rounded-[6px]"
                />
              ))}
            </Marquee>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default About
