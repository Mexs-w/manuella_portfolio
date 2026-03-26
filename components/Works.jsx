"use client"

import React, { useState, useEffect } from 'react'
import WorkCard from './uis/WorkCard'
import Link from 'next/link'
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

const Works = ({page}) => {

    const listOfWorks = [
        // {
        //     title: "Some Text",
        //     thumbnail: "/assets/1.jpeg",
        //     link: "/",
        //     category: "graphics",
        //     group: ""
        // },
        // {
        //     title: "Some Text",
        //     thumbnail: "/assets/2.jpeg",
        //     link: "/",
        //     category: "graphics",
        //     group: ""
        // },
        // {
        //     title: "Some Text",
        //     thumbnail: "/assets/3.jpeg",
        //     link: "/",
        //     category: "graphics",
        //     group: ""
        // },
        // {
        //     title: "Some Text",
        //     thumbnail: "/assets/4.jpeg",
        //     link: "/",
        //     category: "graphics",
        //     group: ""
        // },
        // {
        //     title: "Some Text",
        //     thumbnail: "/assets/5.jpeg",
        //     link: "/",
        //     category: "graphics",
        //     group: ""
        // },
        // {
        //     title: "Some Text",
        //     thumbnail: "/assets/brand_promotion/1.jpeg",
        //     link: "/",
        //     category: "graphics",
        //     group: "bp"
        // },
        {
            title: "Some Text",
            thumbnail: "/assets/event_and_church/1.jpeg",
            link: "/",
            category: "graphics",
            group: "ch"
        },
        {
            title: "Some Text",
            thumbnail: "/assets/sms/1.jpeg",
            link: "/",
            category: "graphics",
            group: "sms"
        },
        {
            title: "Some Text",
            thumbnail: "/assets/brand_promotion/2.jpeg",
            link: "/",
            category: "graphics",
            group: "bp"
        },
        {
            title: "Some Text",
            thumbnail: "/assets/event_and_church/2.jpeg",
            link: "/",
            category: "graphics",
            group: "ch"
        },
        {
            title: "Some Text",
            thumbnail: "/assets/sms/2.jpeg",
            link: "/",
            category: "graphics",
            group: "sms"
        },
        {
            title: "Some Text",
            thumbnail: "/assets/brand_promotion/3.jpeg",
            link: "/",
            category: "graphics",
            group: "bp"
        },
        {
            title: "Some Text",
            thumbnail: "/assets/event_and_church/3.jpeg",
            link: "/",
            category: "graphics",
            group: "ch"
        },
        {
            title: "Some Text",
            thumbnail: "/assets/sms/3.jpeg",
            link: "/",
            category: "graphics",
            group: "sms"
        },
        {
            title: "Some Text",
            thumbnail: "/assets/brand_promotion/4.jpeg",
            link: "/",
            category: "graphics",
            group: "bp"
        },
        {
            title: "Some Text",
            thumbnail: "/assets/event_and_church/4.jpeg",
            link: "/",
            category: "graphics",
            group: "ch"
        },
        {
            title: "Some Text",
            thumbnail: "/assets/sms/4.jpeg",
            link: "/",
            category: "graphics",
            group: "sms"
        },
        {
            title: "Some Text",
            thumbnail: "/assets/brand_promotion/5.jpeg",
            link: "/",
            category: "graphics",
            group: "bp"
        },
        {
            title: "Some Text",
            thumbnail: "/assets/event_and_church/5.jpeg",
            link: "/",
            category: "graphics",
            group: "ch"
        },
        {
            title: "Some Text",
            thumbnail: "/assets/sms/5.jpeg",
            link: "/",
            category: "graphics",
            group: "sms"
        },
        {
            title: "Some Text",
            thumbnail: "/assets/brand_promotion/6.jpeg",
            link: "/",
            category: "graphics",
            group: "bp"
        },
        {
            title: "Some Text",
            thumbnail: "/assets/event_and_church/6.jpeg",
            link: "/",
            category: "graphics",
            group: "ch"
        },
        {
            title: "Some Text",
            thumbnail: "/assets/sms/6.jpeg",
            link: "/",
            category: "graphics",
            group: "sms"
        },
        {
            title: "Some Text",
            thumbnail: "/assets/brand_promotion/7.jpeg",
            link: "/",
            category: "graphics",
            group: "bp"
        },
        {
            title: "Some Text",
            thumbnail: "/assets/event_and_church/7.jpeg",
            link: "/",
            category: "graphics",
            group: "ch"
        },
        {
            title: "Some Text",
            thumbnail: "/assets/sms/7.jpeg",
            link: "/",
            category: "graphics",
            group: "sms"
        },
        {
            title: "Some Text",
            thumbnail: "/assets/brand_promotion/8.jpeg",
            link: "/",
            category: "graphics",
            group: "bp"
        },
        {
            title: "Some Text",
            thumbnail: "/assets/event_and_church/8.jpeg",
            link: "/",
            category: "graphics",
            group: "ch"
        },
        {
            title: "Some Text",
            thumbnail: "/assets/sms/8.jpeg",
            link: "/",
            category: "graphics",
            group: "sms"
        },
        {
            title: "Some Text",
            thumbnail: "/assets/brand_promotion/9.jpeg",
            link: "/",
            category: "graphics",
            group: "bp"
        },
        {
            title: "Some Text",
            thumbnail: "/assets/event_and_church/9.jpeg",
            link: "/",
            category: "graphics",
            group: "ch"
        },
        {
            title: "Some Text",
            thumbnail: "/assets/sms/9.jpeg",
            link: "/",
            category: "graphics",
            group: "sms"
        },
        {
            title: "Some Text",
            thumbnail: "/assets/brand_promotion/10.jpeg",
            link: "/",
            category: "graphics",
            group: "bp"
        },
        {
            title: "Some Text",
            thumbnail: "/assets/brand_promotion/11.jpeg",
            link: "/",
            category: "graphics",
            group: "bp"
        },
        {
            title: "Some Text",
            thumbnail: "/assets/brand_promotion/12.jpeg",
            link: "/",
            category: "graphics",
            group: "bp"
        },
        {
            title: "Some Text",
            thumbnail: "/assets/brand_promotion/13.jpeg",
            link: "/",
            category: "graphics",
            group: "bp"
        },
        {
            title: "Some Text",
            thumbnail: "/assets/event_and_church/10.jpeg",
            link: "/",
            category: "graphics",
            group: "ch"
        },
        {
            title: "Some Text",
            thumbnail: "/assets/event_and_church/11.jpeg",
            link: "/",
            category: "graphics",
            group: "ch"
        },
        {
            title: "Some Text",
            thumbnail: "/assets/event_and_church/12.jpeg",
            link: "/",
            category: "graphics",
            group: "ch"
        },
        {
            title: "Some Text",
            thumbnail: "/assets/sms/10.jpeg",
            link: "/",
            category: "graphics",
            group: "sms"
        },
        
    ]

    const [activeGroup, setActiveGroup] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const [isLandingOpen, setIsLandingOpen] = useState(false);

    const [works, setWorks] = useState(listOfWorks)

    const [category, setCategory] = useState("graphics")

    // useEffect(()=>{
    //     const newList = works.map((work)=> work.category === category)
    //     setWorks(newList)
    // }, [category])

    const brandWorks = works.filter(w => w.group === "bp");
    const eventWorks = works.filter(w => w.group === "ch");
    const socialMediaWorks = works.filter(w => w.group === "sms");
    const groupedWorks = {
        bp: brandWorks,
        ch: eventWorks,
        sms: socialMediaWorks,
    };

    const handleOpen = (group, index) => {
        setActiveGroup(group);
        setActiveIndex(index);
        setIsOpen(true);
    };
    const landingHandleOpen = (index) => {
        // setActiveGroup(group);
        setActiveIndex(index);
        setIsLandingOpen(true);
    };

  return (
    <section className={`min-hscreen ${page ? "py-25" : "py-20" } flex itemscenter justify-center md:px-10 px-5 bgwhite stiky top-0 left-0 w-full -z-10 bg[green]`}>

        <div className='max-w-7xl w-full mxauto bg[red]'>
            {/* <div className='mx-auto text-center w-fit px4'>
                <h2 className='font-heading text-4xl text-primary'>Featured Works</h2>
                <hr className='my-2 h-0.5 rounded-full bg-secondary border-0' />
            </div> */}

            <motion.div
                initial="hidden"
                whileInView="show"
                // viewport={{ once: true }}
                variants={fadeUp}
                className="mx-auto text-center w-fit"
            >
                <h2 className="font-heading text-4xl text-primary">
                    Featured Works
                </h2>
                <hr className="my-2 h-0.5 w-16 mx-auto rounded-full bg-secondary border-0" />
            </motion.div>

            {page && <div className='my-10 flex items-center gap-5 transition-all h-fit bg[green] w-full'>
                <p className={`${category === "graphics" && "border-b-2 border-secondary py-2"} text-xl text-dark-primary hover:scale-105 transition-all cursor-pointer`} onClick={()=>setCategory("graphics")}>Graphics</p>
                <p className={`${category === "case_study" && "border-b-2 border-secondary py-2"} text-xl text-dark-primary hover:scale-105 transition-all cursor-pointer`} onClick={()=>setCategory("case_study")}>Case Study</p>
                <p className={`${category === "videos" && "border-b-2 border-secondary py-2"} text-xl text-dark-primary hover:scale-105 transition-all cursor-pointer`} onClick={()=>setCategory("videos")}>Videos</p>
            </div>}
            
            {category=== "graphics" && <section className='grid gap-20'>
                {/* BRAND AN PROMOTIONS  */}
                {page && 
                <div>
                    <h2 className='text-primary text-2xl font-bold my-6 text-center'>Brand Promotions</h2>
                    <div className='my10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-8 bg[red] w-full'>
                        {brandWorks.map((work, index)=>(
                           <div key={index}
                            onClick={() => handleOpen(work.group, index)}
                            className="cursor-pointer">
                                <WorkCard key={index} text={work.title} image={work.thumbnail} link={work.link} index={index} />
                            </div>
                        ))}

                    </div>
                </div>
                }

                {/* EVENT AND CHURCH  */}
                {page && 
                <div className='my-6'>
                    <h2 className='text-primary text-2xl font-bold my-6 text-center'>Events & Church</h2>
                    <div className='my10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-8 bg[red] w-full'>
                        {eventWorks.map((work, index)=>(
                            <div key={index}
                            onClick={() => handleOpen(work.group, index)}
                            className="cursor-pointer">
                                <WorkCard key={index} text={work.title} image={work.thumbnail} link={work.link} index={index} />
                            </div>
                        ))}

                    </div>
                </div>
                }

                {/* SOCIAL MEDIA  */}
                {page && 
                <div>
                    <h2 className='text-primary text-2xl font-bold my-6 text-center'>Social Media</h2>
                    <div className='my10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-8 bg[red] w-full'>
                        {socialMediaWorks.map((work, index)=>(
                            <div key={index}
                            onClick={() => handleOpen(work.group, index)}
                            className="cursor-pointer">
                                <WorkCard key={index} text={work.title} image={work.thumbnail} link={work.link} index={index} />
                            </div>
                        ))}

                    </div>
                </div>
                }
            </section>}
           


            {/* LANDING PAGE  */}

            {!page && <div className='my-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-8 bg[red] w-full'>
                {works.map((work, index)=>(
                    !page && index < 10 &&
                    <div key={index}
                            onClick={() => landingHandleOpen(index)}
                            className="cursor-pointer">
                        <WorkCard key={index} text={work.title} image={work.thumbnail} link={work.link} index={index} />
                    </div>
                    // <img />
                    // :
                    // <WorkCard key={index} text={work.title} image={work.thumbnail} link={work.link} index={index} />
                ))}

            </div>}



            <div className='flex items-center gap-4 justify-center flex-wrap my-8'>
                {!page && <Link href="/works" className="inlineblock my-6  px-6 py-3 bg-secondary text-white rounded-full font-medium hover:scale-105 transition">See my works</Link>}
                <Link href="/" className="inlineblock px-6 py-3 my-6  bg-primary text-white rounded-full font-medium hover:scale-105 transition">Contact Me</Link>
            </div>

        </div>
                
                {/* LANDING PAGE  */}
        {isLandingOpen && (
            <div
                className="fixed inset-0 bg-white/90 z-50 flex items-center justify-center min-hscreen"
                onClick={() => setIsLandingOpen(false)}
            >
                {/* Close Button */}
                <button
                onClick={() => setIsLandingOpen(false)}
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
                        {works?.map((item, i) => (
                        <SwiperSlide key={i}>
                            <img
                            src={item.thumbnail}
                            alt=""
                            className="w-full hauto h-[80vh] max-h-[80vh] object-contain rounded-xl"
                            />
                        </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        )}

        {/* WORK PAGE  */}
        {isOpen && (
            <div
                className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
                onClick={() => setIsOpen(false)}
            >
                {/* Close Button */}
                <button
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 text-white text-3xl z-50"
                >
                ✕
                </button>

                {/* Prevent closing when clicking image */}
                <div
                className="w-full max-w-5xl px-4"
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
                    {groupedWorks[activeGroup]?.map((item, i) => (
                    <SwiperSlide key={i}>
                        <img
                        src={item.thumbnail}
                        alt=""
                        className="w-full h-auto max-h-[80vh] object-contain rounded-xl"
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

export default Works