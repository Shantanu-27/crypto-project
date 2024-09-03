import React from 'react'
import './MainComponent.css'
import Button from '../../Common/Button/Button'
import iphone from "../../../assets/iphone.png"
import gradient from "../../../assets/gradient.png"
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'


function MainComponent() {
  const navigate= useNavigate();

  const goToDashboard=()=>{
    navigate('/dashboard')
  }

  return (
    <div className="flex-info">
        <div className="left-component">
          <motion.h1
           className="track-crypto-heading"
           initial={{opacity:0, x:50}} 
           animate={{opacity:1,x:0}} 
           transition={{duration:0.5}} 
          >
            Track Crypto
          </motion.h1>
          <motion.h1
           className="real-time-heading"
           initial={{opacity:0, x:50}} 
           animate={{opacity:1,x:0}} 
           transition={{duration:0.5,delay:1}} 
          >
            Real Time
          </motion.h1>
            <motion.p className="info-text" initial={{opacity:0, x:50}} animate={{opacity:1,x:0}} transition={{duration:0.5,delay:0.5}} >Track crypto through a public api in real time. Visit the dashboard to do so!</motion.p>
            <motion.div 
            className="btn-flex" 
            initial={{opacity:0, x:50}} 
            animate={{opacity:1,x:0}} 
            transition={{duration:0.5,delay:1}} >
                <Button text={'Dashboard'}onClick={goToDashboard} />
                <Button text={'Share'} outlined={true} />
            </motion.div>
        </div>
        <div className="phone-container">
            <motion.img 
            src={iphone} 
            className='iphone' 
            initial={{y:-2}}
            animate={{y:10}}
            transition={{
              type:"smooth",
              repeatType:"mirror",
              duration:2,
              repeat:Infinity,
            }}
            />
            <img src={gradient} className='gradient' alt="" />
        </div>
    </div>
  )
}

export default MainComponent
