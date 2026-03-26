'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Marquee from 'react-fast-marquee'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const slideRight = {
  hidden: { opacity: 0, x: 60, scale: 0.95 },
  show: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.7, ease: 'easeOut' } },
}

const About = ({page}) => {


  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  

  const certificationsImages = [
    "/assets/certifications/1.jpeg",
    "/assets/certifications/2.jpeg",
    "/assets/certifications/3.jpeg",
    "/assets/certifications/4.jpeg"
  ]

  const handleOpen = (index) => {
        // setActiveGroup(group);
        setActiveIndex(index);
        setIsOpen(true);
  };
  

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
                "/assets/brands_logos/GDP.jpeg",
                "/assets/brands_logos/LOF.jpeg",
                "/assets/brands_logos/logoipsum.png",
                "/assets/brands_logos/novak.webp",
                "/assets/brands_logos/remys.png",
                "/assets/brands_logos/GDP.jpeg",
                "/assets/brands_logos/LOF.jpeg",
                "/assets/brands_logos/logoipsum.png",
                "/assets/brands_logos/novak.webp",
                "/assets/brands_logos/remys.png",
                "/assets/brands_logos/GDP.jpeg",
                "/assets/brands_logos/LOF.jpeg",
                
              ].map((image, i) => (
                <img
                  key={i}
                  src={image}
                  alt="brand logo"
                  className="h-10 mx-6 lg:opacity-80 hover:opacity-100 transition"
                />
              ))}
            </Marquee>
          </div>
        </motion.div>

       
        {page && 
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        //   viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flx flexcol mdflexrow itemscenter grid lg:grid-cols-[3fr_1.5fr] gap-6 rounded-3xl bgwhite shadowsm px6 md:px10 my-12 py-5"
        >
          <div className="w-full overflow-hidden order-2">
              
              <h3 className='font-bold text-2xl md:text-3xl'>Software Skills</h3>

              <div className='my-8 flex items-center gap-5 w-full flex-wrap'>
                <div className='md:h-20 md:w-20 h-10 w-10 overflow-hidden rounded-xl mx5'>
                    <img src='/assets/icons/skills/canva.jpeg' alt='software' className='h-full w-full object-cover' />
                </div>
                <div className='md:h-20 md:w-20 h-10 w-10 overflow-hidden rounded-xl mx5'>
                    <img src='/assets/icons/skills/lightroom.png' alt='software' className='h-full w-full object-cover' />
                </div>
                <div className='md:h-20 md:w-20 h-10 w-10 overflow-hidden rounded-xl mx5'>
                    <img src='/assets/icons/skills/metricool.jpeg' alt='software' className='h-full w-full object-cover' />
                </div>
                <div className='md:h-20 md:w-20 h-10 w-10 overflow-hidden rounded-xl mx5'>
                    <img src='/assets/icons/skills/business_suite.jpeg' alt='software' className='h-full w-full object-cover' />
                </div>
                <div className='md:h-20 md:w-20 h-10 w-10 overflow-hidden rounded-xl mx5'>
                    <img src='/assets/icons/skills/snapseed.png' alt='software' className='h-full w-full object-cover' />
                </div>
                <div className='md:h-20 md:w-20 h-10 w-10 overflow-hidden rounded-xl mx5'>
                    <img src='/assets/icons/skills/zarchiver.png' alt='software' className='h-full w-full object-cover' />
                </div>
                {/* <div className='h-20 w-20 overflow-hidden rounded-xl'>
                    <img src='/assets/icons/skills/substack.png' alt='software' className='h-full w-full object-cover' />
                </div> */}
                <div className='md:h-20 md:w-20 h-10 w-10 overflow-hidden rounded-xl mx5'>
                    <img src='/assets/icons/skills/pixellab.webp' alt='software' className='h-full w-full object-cover' />
                </div>
              </div>

          </div>

          <div>
              <h3 className='font-bold md:text-3xl text-2xl'>Personal Skills</h3>

              <div className='my-8 flex items-center gap-5 w-full flex-wrap'>
                  <div className='py-2 px-6 rounded-full bg-primary text-white'>
                    <label className='md:text-lg text-sm'>Problem Solving</label>
                  </div>
                  <div className='py-2 px-6 rounded-full bg-primary text-white'>
                    <label className='md:text-lg text-sm'>Time Management</label>
                  </div>
                  <div className='py-2 px-6 rounded-full bg-primary text-white'>
                    <label className='md:text-lg text-sm'>Collaboration</label>
                  </div>
                  <div className='py-2 px-6 rounded-full bg-primary text-white'>
                    <label className='md:text-lg text-sm'>Strategic Thinking</label>
                  </div>
                  <div className='py-2 px-6 rounded-full bg-primary text-white'>
                    <label className='md:text-lg text-sm'>Adaptability</label>
                  </div>
                  <div className='py-2 px-6 rounded-full bg-primary text-white'>
                    <label className='md:text-lg text-sm'>Communication</label>
                  </div>
                  <div className='py-2 px-6 rounded-full bg-primary text-white'>
                    <label className='md:text-lg text-sm'>Attention to Detail</label>
                  </div>
              </div>
          </div>
        </motion.div>}

         {page && 
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        //   viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flx flexcol mdflexrow itemscenter gap-6 rounded-3xl bgwhite shadowsm px6 md:px10 my-8 py-5"
        >
          <div className="w-full overflow-hidden order-2">
              
              <h3 className='fontbold text-2xl md:text-3xl text-center'>My <span className=''>Certifications</span></h3>

              <div className='my-12 grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-5 w-full flex-wrap'>
                {certificationsImages.map((image, idx)=>(
                  <div className='h-auto overflow-hidden rounded-xl mx5 cursor-pointer' key={idx} onClick={() => handleOpen(idx)}>
                      <img src={image} alt={`cert ${idx}`} className='h-full w-full object-cover' />
                  </div>
                ))}
              </div>

          </div>

          
        </motion.div>}

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
                "/assets/6.jpg",
                "/assets/7.jpeg",
                "/assets/8.jpeg",
                "/assets/9.jpg",
                "/assets/10.jpeg",
                "/assets/11.jpeg",
                "/assets/12.jpeg",
                "/assets/13.jpeg",
                "/assets/14.jpeg",
                "/assets/15.jpeg",
                "/assets/6.jpg",
                "/assets/7.jpeg",
                "/assets/8.jpeg",
                "/assets/9.jpg",
                "/assets/10.jpeg",
                "/assets/11.jpeg",
                "/assets/12.jpeg",
                "/assets/13.jpeg",
                "/assets/14.jpeg",
                "/assets/15.jpeg"
              ].map((image, i) => (
                <img
                  key={i}
                  src={image}
                  alt="brand logo"
                  className="h-52 w-48 mx-6 lg:opacity-80 hover:opacity-100 transition object-cover rounded-[6px]"
                />
              ))}
            </Marquee>
          </div>
        </motion.div>

      </div>


        {isOpen && (
            <div
                className="fixed inset-0 bg-white/90 z-50 flex items-center justify-center min-hscreen"
                onClick={() => setIsOpen(false)}
            >
                {/* Close Button */}
                <button
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 text-black text-3xl z-50"
                >
                ✕
                </button>

                {/* Prevent closing when clicking image */}
                <div
                className="w-full max-w-5xl px-4 bg[red] flex items-center justify-center pt24"
                onClick={(e) => e.stopPropagation()}
                >
                    <Swiper
                        modules={[Navigation, Pagination]}
                        navigation
                        pagination={{ clickable: true }}
                        initialSlide={activeIndex}
                        spaceBetween={20}
                        slidesPerView={1}
                    >
                        {certificationsImages?.map((item, i) => (
                        <SwiperSlide key={i}>
                            <img
                            src={item}
                            alt=""
                            className="w-full hauto h-[80vh] max-h-[80vh] object-contain rounded-xl"
                            />
                        </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        )}
    </section>
  )
}

export default About
