"use client"

import React from 'react'
import { motion } from 'framer-motion'

const WorkCard = ({text, image, link, index}) => {
  return (
    <motion.div 
    initial={{ opacity: 0.8, y: 40 }}
    // whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    // transition={{ duration: 0.6, delay: 0.2 * index }}
    className='h[100px] @max-xs:h-62.5 rounded[30px] bg-darkprimary bgwhite pt8 pb10 flex items-center justify-center cursor-pointer hovermb20 transitionall px-2 text-dark-primary wmd wfull top[100px] left0 -z0 shadowmd group relative group-hover:scale-110 transition-transform duration-500 overflow-hidden'>

        <div className='bg-[grey] h[200px] w[90%] h-full w-full rounded-[6px] overflow-hidden'>
            <img src={image} alt={text + "" + image} className='object-cover h-full w-full hover:scale-105 transition-all' />
        </div>

        {/* <p className='text-2xl text-center my-5'>{text}</p> */}
        
    </motion.div>
  )
}

export default WorkCard