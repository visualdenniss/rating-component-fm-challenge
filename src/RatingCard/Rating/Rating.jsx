import React from 'react'
import { motion } from "framer-motion";
import { basicFadeUp2Profile, basicFadeUp3Profile, basicFadeUpProfile } from '../../animation';
import './Rating.css'
const Rating = ({vote, index, setIndex, delay, setRevealed}) => {

    const data = [
        {id:1,value:1},
        {id:2,value:2},
        {id:3,value:3},
        {id:4,value:4},
        {id:5,value:5},
    ]

    const handleClick = () => {
        setRevealed(true)
        vote(true)
    }

    return (
        <motion.div 
        initial={{opacity:0, y: 80}}
        animate={{opacity:1, y: 0,  
            transition: {
                delay: delay, 
                ease:  [0.25, 0.1, 0.25, 1],
                duration: 1.5,
            }}}
        className='wrapper'>
            <motion.div 
            className="rating-content">
                <div className="star-icon">
                    <img src="./assets/icon-star.svg" alt="" />
                </div>
                <motion.h2
                className="title">
                    How did we do?
                </motion.h2>
                <p className="info">
                Please let us know how we did with your support request. All feedback is appreciated 
                to help us improve our offering! 
                </p>
                <div className="ratings">
                    <ul className='rating-list'>
                        {data.map((item, i)=>(
                            <motion.li 
                            initial={{opacity: 0, scale: 0}}
                            animate={{
                            opacity: 1,
                            scale: 1,
                            transition: {
                                duration: .3,
                                delay: delay + (0.15 * i),  
                                ease: [0.25, 0.1, 0.25, 1],
                            }
                            }}                            
                            className={item.id===index?'rating active':'rating'} onClick={()=>setIndex(item.id)}>
                                {item.value}
                            </motion.li>
                        )
                        )}
                    </ul>
                </div>
                <motion.button className="submit-btn" onClick={handleClick}>
                    SUBMIT
                </motion.button>
            </motion.div>
        </motion.div >
    )
}

export default Rating
