import React from 'react'
import './navbar.css'
import Image from "../../imgs/logo.jpg"

import { motion } from "framer-motion";
const Navbar = () => {
  return (

     
      

   <div className='main-nav'>
     <nav
   
   >

    

  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      duration: 0.8,
      delay: 0.5,
      ease: [0, 0.71, 0.2, 1.01]
    }}
  >
  <img  className='logo-img' src={Image} alt="" />
   
  </motion.div>
       
  <ul>
     
           
        
          <motion.li
           initial={{ opacity: 0, scale: 0.5 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{
             duration: 1,
             delay: 0.5,
             ease: [0, 0.71, 0.2, 1.01]
           }}
          >Home</motion.li>
            <motion.li
           initial={{ opacity: 0, scale: 0.5 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{
             duration: 1,
             delay: 0.6,
             ease: [0, 0.71, 0.2, 1.01]
           }}
          >Gallery</motion.li>
            <motion.li
           initial={{ opacity: 0, scale: 0.5 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{
             duration: 1,
             delay: 0.7,
             ease: [0, 0.71, 0.2, 1.01]
           }}
          >Skills</motion.li>
            <motion.li
           initial={{ opacity: 0, scale: 0.5 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{
             duration: 1,
             delay: 0.8,
             ease: [0, 0.71, 0.2, 1.01]
           }}
          >Projets</motion.li>
            <motion.li
           initial={{ opacity: 0, scale: 0.5 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{
             duration: 1,
             delay: 0.9,
             ease: [0, 0.71, 0.2, 1.01]
           }}
          >Contact</motion.li>
       </ul>
      

      
    </nav>
   </div>
    
  )
}

export default Navbar
