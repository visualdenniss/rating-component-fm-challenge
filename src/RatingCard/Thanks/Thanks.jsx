import React from 'react'

import './Thanks.css'
const Thanks = ({vote, index, setIndex}) => {
    return (
        <div className='wrapper'>
            <div className="thanks-content">
                <div className="thank-img">
                    <img src='./assets/illustration-thank-you.svg' alt="" />
                </div>
                <div className="rating-display">
                    {`You selected ${index} out of 5`}
                </div>
                <h2 className="thank-title" onClick={()=> vote(false)}>
                    Thank you!
                </h2>
                <p className="thank-text">
                We appreciate you taking the time to give a rating. If you ever need more support, 
                don’t hesitate to get in touch!
                </p>
            </div>
        </div>
    )
}

export default Thanks
