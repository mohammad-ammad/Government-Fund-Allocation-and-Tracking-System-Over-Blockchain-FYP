import React from 'react'
import { motion } from 'framer-motion';
import hero from '../../../assets/hero.png';
const Hero = () => {
  return (
    <div className='hero__container'>
      <motion.div className='left'
      initial={{x:'-100vw'}}
      animate={{x:0}}
      transition={{delay:0.5,type:'spring', stiffness:120, duration:1}}
      >
      <h3>Government Fund Alloction and Tracking System</h3>
      </motion.div>
        
        <motion.div
          initial={{y:-250}}
          animate={{y:-10}}
          transition={{delay:0.2, type:"spring", stiffness:100}}
          className='right'
        >
          <img src={hero} alt=""/>
      </motion.div>
    </div>
  )
}

export default Hero