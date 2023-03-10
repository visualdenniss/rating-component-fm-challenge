import React from 'react'
import {motion} from 'framer-motion'

import './Thanks.css'
const Thanks = ({vote, index, setIndex}) => {
    return (
        <div className='wrapper'>
            <div className="thanks-content">
                <motion.div 
                initial={{scale: 0, rotate: 180}}
                animate={{
                scale: 1, rotate: 0, 
                transition: {
                    duration: 1,
                    ease: [0.25, 0.1, 0.25, 1],
                }
                }}                    
                className="thank-img">
                    <img src='./assets/illustration-thank-you.svg' alt="" />
                </motion.div>
                <div className="rating-display">
                    {`You selected ${index} out of 5`}
                </div>
                <a className="thank-title" onClick={()=> vote(false)}>
                    Thank you!
                </a>
                <p className="thank-text">
                We appreciate you taking the time to give a rating. If you ever need more support, 
                don’t hesitate to get in touch!
                </p>
            </div>
        </div>
    )
}

export default Thanks
