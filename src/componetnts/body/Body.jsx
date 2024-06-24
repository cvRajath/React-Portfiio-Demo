import React from 'react'
import "./body.css"
import Image from "../../imgs/logo.jpg"

import { motion } from "framer-motion";
const body = () => {
  return (
    <div className='body'
   
    >
      <motion.div
       initial={{ opacity: 0, scale: 0.5 }}
       animate={{ opacity: 1, scale: 1 }}
       transition={{
         duration: 0.8,
         delay: 0.7,
         ease: [0, 0.71, 0.2, 2.01]
       }}
      >
         <img src={Image} alt="" className='body-img'/>
      </motion.div>
      
    
      <motion.div
       initial={{ opacity: 0, scale: 0.5 }}
       animate={{ opacity: 1, scale: 1 }}
       transition={{
         duration: 0.8,
         delay: 0.7,
         ease: [0, 0.71, 0.2, 2.01]
       }}
      className='body-text'>
          <div className='head-1'>Rajath C V</div>
          <div className='head-2'>Full Stack Developer</div>
          <div className='head-3'>Lum suscipit voluptatibus aut, quas expedita, deserunt ipsa dicta at, vero fuga fugit nobis asperiores magnam obcaecati nam quam.</div>
          <button className='body-btn'>Go</button>
      </motion.div>




    </div>
  )
}

export default body
