import React from 'react'
import './Hero.css'
import Navbar from './Navbar'

const Hero = () => {
    return (
        <div className='hero'>
                    <Navbar/>

            <div className='content'>
                <p></p>
                <p>POSSA</p>
                <p>Knowledge, Integrity, and <br/> National Development.</p>
                <p className="context">Join the Political Science Students' Association in shaping tomorrow's leaders <br/> through knowledge, collaboration, and integrity.</p>
               
            </div>

        </div>
    )
}

export default Hero
