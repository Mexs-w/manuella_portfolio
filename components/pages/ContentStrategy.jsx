'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import CaseStudy from '../uis/CaseStudy'
import WorkCard from '../uis/WorkCard'
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

const ContentStrategy = () => {

    const novakStrategySlides = [
        "/assets/case/content_strategy/novak/1.jpg",
        "/assets/case/content_strategy/novak/2.jpg",
        "/assets/case/content_strategy/novak/3.jpg",
        "/assets/case/content_strategy/novak/4.jpg",
        "/assets/case/content_strategy/novak/5.jpg",
        "/assets/case/content_strategy/novak/6.jpg",
        "/assets/case/content_strategy/novak/7.jpg",
        "/assets/case/content_strategy/novak/8.jpg",
        "/assets/case/content_strategy/novak/9.jpg",        
        "/assets/case/content_strategy/novak/10.jpg",        
    ]

    const [index, setIndex] = useState(0)

    const nextSlide = () => {
        if (index < novakStrategySlides.length - 1) setIndex(index + 1)
    }

    const prevSlide = () => {
        if (index > 0) setIndex(index - 1)
    }

    const [activeIndex, setActiveIndex] = useState(0);

    const [isOpen, setIsOpen] = useState(false);


    
 const handleOpen = (index) => {
    setActiveIndex(index);
    setIsOpen(true);
};

  return (
    <section className='flex items-center justify-center px-5 md:px-10 bgwhite relative py-30 bg[yellow]'>
        <div className='w-full h-full'>
            <div className="max-w-7xl w-full mx-auto">  
                <motion.div
                    initial="hidden"
                    whileInView="show"
                //   viewport={{ once: true }}
                    variants={fadeUp}
                    className="mx-auto text-center w-fit"
                >
                    <h2 className="font-heading text-4xl text-primary">
                        Content Strategy
                    </h2>
                    <hr className="my-2 h-0.5 w-16 mx-auto rounded-full bg-secondary border-0" />
                </motion.div>

                <div className='my-8'>
                    <div>
                        <div className='text-center max-w-xl mx-auto text-lg'>
                            <p>Here is a case study that I developed for NOVAK Herbal Products, demonstrating my ability to craft an effective content strategy</p>
                        </div>
                        <div className='my-8'>
                            <div
                                className="relative w-full max-w-4xl mx-auto h-auto flex items-center justify-center bg-black rounded-2xl overflow-hidden"
                                onContextMenu={(e) => e.preventDefault()} // disables right-click
                                >
                                {/* LEFT CLICK AREA */}
                                <div
                                    className="absolute left-0 top-0 w-1/2 h-full cursor-pointer z-10"
                                    onClick={prevSlide}
                                />

                                {/* RIGHT CLICK AREA */}
                                <div
                                    className="absolute right-0 top-0 w-1/2 h-full cursor-pointer z-10"
                                    onClick={nextSlide}
                                />

                                {/* IMAGE */}
                                <img
                                    src={novakStrategySlides[index]}
                                    alt="case study slide"
                                    className="max-h-full max-w-full object-contain select-none pointer-events-none"
                                />

                                {/* OPTIONAL: SLIDE INDICATOR */}
                                <div className="absolute bottom-5 right-2 text-white text-sm">
                                    {index + 1} / {novakStrategySlides.length}
                                </div>
                                </div>
                        </div>
                    </div>
                    
                </div>


            </div>
            
        </div>
        
    </section>
  )
}

export default ContentStrategy