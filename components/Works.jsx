"use client"

import React, { useState, useEffect } from 'react'
import WorkCard from './uis/WorkCard'
import Link from 'next/link'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const Works = ({page}) => {

    const listOfWorks = [
        // {
        //     title: "Some Text",
        //     thumbnail: "/assets/1.jpg",
        //     link: "/",
        //     category: "graphics",
        //     group: ""
        // },
        // {
        //     title: "Some Text",
        //     thumbnail: "/assets/2.jpg",
        //     link: "/",
        //     category: "graphics",
        //     group: ""
        // },
        // {
        //     title: "Some Text",
        //     thumbnail: "/assets/3.jpg",
        //     link: "/",
        //     category: "graphics",
        //     group: ""
        // },
        // {
        //     title: "Some Text",
        //     thumbnail: "/assets/4.jpg",
        //     link: "/",
        //     category: "graphics",
        //     group: ""
        // },
        // {
        //     title: "Some Text",
        //     thumbnail: "/assets/5.jpg",
        //     link: "/",
        //     category: "graphics",
        //     group: ""
        // },
        {
            title: "Some Text",
            thumbnail: "/assets/brand_promotion/1.jpg",
            link: "/",
            category: "graphics",
            group: "bp"
        },
        {
            title: "Some Text",
            thumbnail: "/assets/event_and_church/1.jpg",
            link: "/",
            category: "graphics",
            group: "ch"
        },
        {
            title: "Some Text",
            thumbnail: "/assets/sms/1.jpg",
            link: "/",
            category: "graphics",
            group: "sms"
        },
        {
            title: "Some Text",
            thumbnail: "/assets/brand_promotion/2.jpg",
            link: "/",
            category: "graphics",
            group: "bp"
        },
        {
            title: "Some Text",
            thumbnail: "/assets/event_and_church/2.jpg",
            link: "/",
            category: "graphics",
            group: "ch"
        },
        {
            title: "Some Text",
            thumbnail: "/assets/sms/2.jpg",
            link: "/",
            category: "graphics",
            group: "sms"
        },
        {
            title: "Some Text",
            thumbnail: "/assets/brand_promotion/3.jpg",
            link: "/",
            category: "graphics",
            group: "bp"
        },
        {
            title: "Some Text",
            thumbnail: "/assets/event_and_church/3.jpg",
            link: "/",
            category: "graphics",
            group: "ch"
        },
        {
            title: "Some Text",
            thumbnail: "/assets/sms/3.jpg",
            link: "/",
            category: "graphics",
            group: "sms"
        },
        {
            title: "Some Text",
            thumbnail: "/assets/brand_promotion/4.jpg",
            link: "/",
            category: "graphics",
            group: "bp"
        },
        {
            title: "Some Text",
            thumbnail: "/assets/event_and_church/4.jpg",
            link: "/",
            category: "graphics",
            group: "ch"
        },
        {
            title: "Some Text",
            thumbnail: "/assets/sms/4.jpg",
            link: "/",
            category: "graphics",
            group: "sms"
        },
        {
            title: "Some Text",
            thumbnail: "/assets/brand_promotion/5.jpg",
            link: "/",
            category: "graphics",
            group: "bp"
        },
        {
            title: "Some Text",
            thumbnail: "/assets/event_and_church/5.jpg",
            link: "/",
            category: "graphics",
            group: "ch"
        },
        {
            title: "Some Text",
            thumbnail: "/assets/sms/5.jpg",
            link: "/",
            category: "graphics",
            group: "sms"
        },
        {
            title: "Some Text",
            thumbnail: "/assets/brand_promotion/6.jpg",
            link: "/",
            category: "graphics",
            group: "bp"
        },
        {
            title: "Some Text",
            thumbnail: "/assets/event_and_church/6.jpg",
            link: "/",
            category: "graphics",
            group: "ch"
        },
        {
            title: "Some Text",
            thumbnail: "/assets/sms/6.jpg",
            link: "/",
            category: "graphics",
            group: "sms"
        },
        {
            title: "Some Text",
            thumbnail: "/assets/brand_promotion/7.jpg",
            link: "/",
            category: "graphics",
            group: "bp"
        },
        {
            title: "Some Text",
            thumbnail: "/assets/event_and_church/7.jpg",
            link: "/",
            category: "graphics",
            group: "ch"
        },
        {
            title: "Some Text",
            thumbnail: "/assets/sms/7.jpg",
            link: "/",
            category: "graphics",
            group: "sms"
        },
        {
            title: "Some Text",
            thumbnail: "/assets/brand_promotion/8.jpg",
            link: "/",
            category: "graphics",
            group: "bp"
        },
        {
            title: "Some Text",
            thumbnail: "/assets/event_and_church/8.jpg",
            link: "/",
            category: "graphics",
            group: "ch"
        },
        {
            title: "Some Text",
            thumbnail: "/assets/sms/8.jpg",
            link: "/",
            category: "graphics",
            group: "sms"
        },
        {
            title: "Some Text",
            thumbnail: "/assets/brand_promotion/9.jpg",
            link: "/",
            category: "graphics",
            group: "bp"
        },
        // {
        //     title: "Some Text",
        //     thumbnail: "/assets/event_and_church/9.jpg",
        //     link: "/",
        //     category: "graphics",
        //     group: "ch"
        // },
        {
            title: "Some Text",
            thumbnail: "/assets/sms/9.jpg",
            link: "/",
            category: "graphics",
            group: "sms"
        },
        // {
        //     title: "Some Text",
        //     thumbnail: "/assets/brand_promotion/6.jpg",
        //     link: "/",
        //     category: "graphics",
        //     group: "bp"
        // },
        // {
        //     title: "Some Text",
        //     thumbnail: "/assets/event_and_church/6.jpg",
        //     link: "/",
        //     category: "graphics",
        //     group: "ch"
        // },
        {
            title: "Some Text",
            thumbnail: "/assets/sms/10.jpg",
            link: "/",
            category: "graphics",
            group: "sms"
        },
        
    ]

    const [works, setWorks] = useState(listOfWorks)

    const [category, setCategory] = useState("graphics")

    // useEffect(()=>{
    //     const newList = works.map((work)=> work.category === category)
    //     setWorks(newList)
    // }, [category])

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
                    <h2 className='text-primary text-2xl font-bold my2'>Brand Promotions</h2>
                    <div className='my10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-8 bg[red] w-full'>
                        {works.map((work, index)=>(
                            work.group === "bp" &&
                            
                            <WorkCard key={index} text={work.title} image={work.thumbnail} link={work.link} index={index} />
                        ))}

                    </div>
                </div>
                }

                {/* EVENT AND CHURCH  */}
                {page && 
                <div className='my-6'>
                    <h2 className='text-primary text-2xl font-bold my-2'>Events & Church</h2>
                    <div className='my10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-8 bg[red] w-full'>
                        {works.map((work, index)=>(
                            work.group === "ch" &&
                            <WorkCard key={index} text={work.title} image={work.thumbnail} link={work.link} index={index} />
                        ))}

                    </div>
                </div>
                }

                {/* SOCIAL MEDIA  */}
                {page && 
                <div>
                    <h2 className='text-primary text-2xl font-bold my-2'>Social Media</h2>
                    <div className='my10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-8 bg[red] w-full'>
                        {works.map((work, index)=>(
                            work.group === "sms" &&
                            <WorkCard key={index} text={work.title} image={work.thumbnail} link={work.link} index={index} />
                        ))}

                    </div>
                </div>
                }
            </section>}
           


            {/* LANDING PAGE  */}

            {!page && <div className='my-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-8 bg[red] w-full'>
                {works.map((work, index)=>(
                    !page && index < 20 &&
                    <WorkCard key={index} text={work.title} image={work.thumbnail} link={work.link} index={index} />
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


    </section>
  )
}

export default Works