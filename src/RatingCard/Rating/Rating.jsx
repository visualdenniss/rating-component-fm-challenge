import React from 'react'

import './Rating.css'
const Rating = ({vote, index, setIndex}) => {

    const data = [
        {id:1,value:1},
        {id:2,value:2},
        {id:3,value:3},
        {id:4,value:4},
        {id:5,value:5},
    ]

    return (
        <div className='wrapper'>
            <div className="rating-content">
                <div className="star-icon">
                    <img src="./assets/icon-star.svg" alt="" />
                </div>
                <h2 className="title">
                    How did we do?
                </h2>
                <p className="info">
                Please let us know how we did with your support request. All feedback is appreciated 
                to help us improve our offering! 
                </p>
                <div className="ratings">
                    <ul className='rating-list'>
                        {data.map((item)=>(
                            <li className={item.id===index?'rating active':'rating'} onClick={()=>setIndex(item.id)}>
                                {item.value}
                            </li>
                        )
                        )}
                    </ul>
                </div>
                <button className="submit-btn" onClick={()=>{vote(true)}}>
                    SUBMIT
                </button>
            </div>
        </div>
    )
}

export default Rating
