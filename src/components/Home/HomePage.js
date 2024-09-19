import React from 'react'
import hero from '../../assets/img/hero.mp4'
import './HomPage.scss'
const HomePage = () => {
    return (
        <div className='HomePage-container'>
            <video autoPlay loop muted
                width='700px' height='420'
            >
                <source
                    src={hero}
                    type='video/mp4'
                />
            </video>

            <div className='content'>
                <p>
                    Make forms
                    worth filling out
                </p>
                <span>
                    Get more data—like signups, feedback, and anything else—with forms designed to be <b> refreshingly different</b>
                </span>
                <br></br>
                <button type="button" class="btn btn-secondary btn-lg">Get started—it's free</button>

            </div>
        </div>
    )
}

export default HomePage