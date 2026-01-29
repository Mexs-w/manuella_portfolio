"use client"

import React from 'react'
import { motion } from 'framer-motion'

const WorkCard = ({text, image, link, index}) => {
  return (
    <motion.div 
    initial={{ opacity: 0.8, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.2 * index }}
    className='h-[400px] rounded-[30px] bg-darkprimary bg-white pt-8 pb-10 cursor-pointer hover:mb20 transitionall px-10 text-dark-primary wmd wfull top[100px] left0 -z0 shadow-md group relative group-hover:scale-110 transition-transform duration-500'>

        <div className='bg-[grey] h-[300px] rounded-[30px] overflow-hidden'>
            <img src={image} alt={text + "" + image} className='object-cover h-full w-full hover:scale-105 transition-all' />
        </div>

        <p className='text-2xl text-center my-5'>{text}</p>
        
    </motion.div>
  )
}

export default WorkCard