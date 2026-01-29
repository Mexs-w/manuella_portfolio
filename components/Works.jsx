"use client"

import React, { useState } from 'react'
import WorkCard from './uis/WorkCard'
import Link from 'next/link'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const Works = ({page}) => {

    const works = [
        {
            title: "Some Text",
            thumbnail: "/assets/1.jpg",
            link: "/"
        },
        {
            title: "Some Text",
            thumbnail: "/assets/2.jpg",
            link: "/"
        },
        {
            title: "Some Text",
            thumbnail: "/assets/3.jpg",
            link: "/"
        },
        {
            title: "Some Text",
            thumbnail: "/assets/4.jpg",
            link: "/"
        },
        {
            title: "Some Text",
            thumbnail: "/assets/5.jpg",
            link: "/"
        },
    ]

    const [category, setCategory] = useState("graphics")

  return (
    <section className={`min-hscreen ${page ? "py-25" : "py-20" } flex itemscenter justify-center md:px-10 px-5 bgwhite stiky top-0 left-0 w-full -z-10`}>

        <div className='max-w-7xl wfull mxauto bg[red]'>
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

            {page && <div className='my-10 flex items-center gap-5 transition-all'>
                <p className={`${category === "graphics" && "border-b-2 border-secondary py-2"} text-xl text-dark-primary hover:scale-105 transition-all cursor-pointer`} onClick={()=>setCategory("graphics")}>Graphics</p>
                <p className={`${category === "case_study" && "border-b-2 border-secondary py-2"} text-xl text-dark-primary hover:scale-105 transition-all cursor-pointer`} onClick={()=>setCategory("case_study")}>Case Study</p>
                <p className={`${category === "videos" && "border-b-2 border-secondary py-2"} text-xl text-dark-primary hover:scale-105 transition-all cursor-pointer`} onClick={()=>setCategory("videos")}>Videos</p>
            </div>}
 
            <div className='my-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                {works.map((work, index)=>(
                    !page ? index < 3 &&
                    <WorkCard key={index} text={work.title} image={work.thumbnail} link={work.link} index={index} />
                    :
                    <WorkCard key={index} text={work.title} image={work.thumbnail} link={work.link} index={index} />
                ))}

            </div>

            <div className='flex items-center gap-4 justify-center flex-wrap'>
                {!page && <Link href="/works" className="inline-block px-6 py-3 bg-secondary text-white rounded-full font-medium hover:scale-105 transition">See my works</Link>}
                <Link href="/" className="inline-block px-6 py-3 bg-primary text-white rounded-full font-medium hover:scale-105 transition">Contact Me</Link>
            </div>

        </div>


    </section>
  )
}

export default Works