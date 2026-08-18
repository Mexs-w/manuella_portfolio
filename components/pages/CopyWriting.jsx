'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Writing from '../uis/Writing'
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

const CopyWriting = () => {

    const contentWritingSlides = [
        "/assets/case/copy_writing/bys/1.jpeg",
        "/assets/case/copy_writing/bys/2.jpeg"
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
                        Copy Writing
                    </h2>
                    <hr className="my-2 h-0.5 w-16 mx-auto rounded-full bg-secondary border-0" />
                </motion.div>

                <div className='my-8'>
                    <div>
                        <div className='text-center max-w-xl mx-auto text-lg'>
                            <p>Here is what I developed for The Beautiful City of Yaweh, demonstrating my ability to craft an effective copy writing</p>
                        </div>
                        <div className='my-8'>
                            {/* <div
                                className="relative w-full max-w-4xl mx-auto h-auto flex items-center justify-center bg-black rounded-2xl overflow-hidden"
                                onContextMenu={(e) => e.preventDefault()} // disables right-click
                                >
                            
                                <div
                                    className="absolute left-0 top-0 w-1/2 h-full cursor-pointer z-10"
                                    onClick={prevSlide}
                                />

                                
                                <div
                                    className="absolute right-0 top-0 w-1/2 h-full cursor-pointer z-10"
                                    onClick={nextSlide}
                                />

                           
                                <img
                                    src={novakStrategySlides[index]}
                                    alt="case study slide"
                                    className="max-h-full max-w-full object-contain select-none pointer-events-none"
                                />

                                <div className="absolute bottom-5 right-2 text-white text-sm">
                                    {index + 1} / {novakStrategySlides.length}
                                </div>
                            </div> */}
                            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-10'>
                                {
                                    contentWritingSlides.map((image,index)=>(
                                        <div key={index}
                                        onClick={() => handleOpen(index)}
                                        className="cursor-pointer">
                                            <WorkCard text="" image={image} link="" index={index} />
                                        </div>
                                    ))
                                }
                                
                            </div>
                            <div className='w-full flex items-center justify-center'>
                                <a href='https://substack.com/@thebeautifulcityofyahweh' target='_blank' className="inlineblock px-6 py-3 bg-primary text-white rounded-full font-medium hover:scale-105 transition flex justify-center w-fit">Click here to read more</a>
                            </div>
                        </div>
                    </div>
                    
                </div>


            </div>
            
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
                            modules={[Navigation]}
                            navigation
                            // pagination={{ clickable: true }}
                            initialSlide={activeIndex}
                            spaceBetween={20}
                            slidesPerView={1}
                        >
                            {contentWritingSlides?.map((item, i) => (
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

export default CopyWriting