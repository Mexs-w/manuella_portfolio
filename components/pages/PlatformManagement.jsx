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

const PlatformManagement = () => {

    const cuapassImages = [
        "/assets/case/cuapass/1.jpeg",
        "/assets/case/cuapass/2a.jpeg",
        "/assets/case/cuapass/2b.jpeg",
        "/assets/case/cuapass/3a.jpeg",
        "/assets/case/cuapass/3b.jpeg",
        "/assets/case/cuapass/4.jpeg",
    ]

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
                        Platform Management
                    </h2>
                    <hr className="my-2 h-0.5 w-16 mx-auto rounded-full bg-secondary border-0" />
                </motion.div>


                 <CaseStudy 
                    logo={"/assets/case/cuapass/cuapass1.jpg"}
                    images={cuapassImages}
                    nameOfOrg={"CUAPASS"}
                    category={"ACADEMIC DEPARTMENT"}
                    bodyTextP1={"As the Public Relations Officer (P.R.O) of CUAPASS (Caleb University Association of Pure and Applied Science Students), I managed the TikTok presence for CUAPASS, where I developed and implemented content strategies aligned with the academic and social standards of Caleb University, Imota, Lagos State. My role focused on using digital media to inform, inspire, and connect undergraduate students, postgraduates, and alumni."}
                    bodyTextP2={"My responsibilities included creating and editing engaging content, crafting meaningful captions, disseminating information, and managing the platform to enhance visibility and foster a strong sense of community within and beyond Caleb University.<"}
                    approachText={"I combined trend-driven content with data insights to produce engaging videos that consistently delivered strong analytics. Also, blended creativity with performance tracking, using analytics to shape content that resonated with the student community."}
                    platform={"Tiktok"}
                    platformText={"My responsibilities included creating and editing engaging content, crafting meaningful captions, disseminating information, and managing the platform to enhance visibility and foster a strong sense of community within and beyond Caleb University."}
                    
                />

                <hr className='border border-secondary' />

            </div>
            
        </div>
        
    </section>
  )
}

export default PlatformManagement