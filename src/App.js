import React, {useState} from 'react'
import RatingCard from './RatingCard/RatingCard'
import './App.css'
import Opener from './Opener'
const App = () => {
    const [revealed, setRevealed] = useState(false)
    return (
        <div className='app'>
             {!revealed && 
             <Opener></Opener>
             }
            <RatingCard delay={revealed ? 0 : 3.2} setRevealed={setRevealed}></RatingCard>
        </div>
    )
}

export default App
