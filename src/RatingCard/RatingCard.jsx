import React, {useState}from 'react'

import Rating from './Rating/Rating'
import Thanks from './Thanks/Thanks'

const RatingCard = ({delay, setRevealed}) => {


    const [voted, setVoted] = useState(false)

    const [index, setIndex] = useState(5)

    return (
        <div>
            {voted?<Thanks vote={setVoted} index={index} setIndex={setIndex}></Thanks>:<Rating vote={setVoted} delay={delay} setRevealed={setRevealed}  index={index} setIndex={setIndex}></Rating>}
        </div>
    )
}

export default RatingCard
