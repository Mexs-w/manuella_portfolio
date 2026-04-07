"use client"

import React, { useState } from 'react'
import WorkCard from '../uis/WorkCard'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


const CaseStudy = ({logo, category, nameOfOrg, bodyTextP1, bodyTextP2, approachText, platform, platformText, images}) => {


    const [activeIndex, setActiveIndex] = useState(0);
    
    const [isOpen, setIsOpen] = useState(false);
    
    
        
     const handleOpen = (index) => {
        setActiveIndex(index);
        setIsOpen(true);
    };
    

  return (
    <div>
            <div className='grid md:grid-cols-[0.5fr_3fr] itemsstart gap5 md:justify-start justifycenter bg[red] py-8 md:px-10 bg-primary rounded-2xl my-10 relative'>
                <div className='md:h-50 md:w-50 h-25 w-25 rounded-full overflow-hidden border border-white mx-auto md:mx-0'>
                    <img src={logo} className='object-cover h-full w-full' />
                </div>

                <div className='px-5 md:px-10 text-white'>
                    <h2 className='font-bold text-2xl my-3 text-center md:text-start'>{category}</h2>
                    <p>{bodyTextP1}</p>
                    <br/>
                    <p>{bodyTextP2}</p>
                </div>

                <h3 className='absolute left-[40%] top-[40%] text-7xl text-white opacity-10 -rotate-12'>{nameOfOrg}</h3>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-16'>
                <div className='py-6 px-10 bg-primary text-white rounded-2xl relative overflow-hidden'>
                    <h2 className='font-bold text-2xl my-3 text-center md:text-start capitalize'>{platform} Management</h2>
                    <p>{platformText}</p>
                <h3 className='absolute left-[40%] top-[40%] text-7xl text-white opacity-10 -rotate-12'>{nameOfOrg}</h3>

                </div>
                <div className='py-6 px-10 bg-primary text-white rounded-2xl relative overflow-hidden'>
                    <h2 className='font-bold text-2xl my-3 text-center md:text-start'>Approach</h2>
                    <p>{approachText}</p>
                <h3 className='absolute left-[40%] top-[40%] text-7xl text-white opacity-10 -rotate-12'>CUAPASS</h3>

                </div>
                <div className='py-6 px-10 bg-primary text-white rounded-2xl relative overflow-hidden'>
                    <h2 className='font-bold text-2xl my-3 text-center md:text-start'>Analytics Results</h2>
                    <p>Below are selected key analytics reflecting the reach, engagement, and overall performance of the {nameOfOrg} TikTok page during my tenure as P.R.O</p>
                <h3 className='absolute left-[40%] top-[40%] text-7xl text-white opacity-10 -rotate-12'>{nameOfOrg}</h3>

                </div>
            </div>

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-10'>
                {
                    images.map((image,index)=>(
                        <div key={index}
                        onClick={() => handleOpen(index)}
                        className="cursor-pointer">
                            <WorkCard text="" image={image} link="" index={index} />
                        </div>
                    ))
                }
                
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
                                {images?.map((item, i) => (
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
    </div>
  )
}

export default CaseStudy