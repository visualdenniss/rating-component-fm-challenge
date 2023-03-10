import React from 'react'
import "./Opener.css"
import star from './revealer.svg'
import { motion } from "framer-motion";
import { basicKeyFrames } from './animation.js';


const Opener = () => {
    return (
        <motion.div 
        initial={{opacity:1, scale: 1}}
        animate={{opacity: 0, scale: 0, transition: {
            delay: 3,
            duration: .2,
            transitionEnd: {
                display: "none",
              },
        }}}
        className='opener'>
                <motion.div {...basicKeyFrames} className="star-icon-opener">
                    <img src={star} alt="" />
                </motion.div>
        </motion.div>
    )
}

export default Opener
