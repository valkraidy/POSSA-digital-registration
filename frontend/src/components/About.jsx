import React from 'react'
import about from './images/about.png'
import './About.css'

const About = () => {
    return (
        <div className='about' id='about'>
            <div className='container'>
                <img src={about} alt='john' />
                <div className='col-2'>
                    <h2>About Possa</h2>
                    <span className='line'></span>
                    <p>We are the Political Science Students Association of the Political Science Department, University of Ghana, Accra City Campus. Guided by our core values of , we welcome you warmly aboard! Together, lets strive for excellence and meaningful impact..</p>
                    <p>I am John Doe, a senior advisor for an independently owned financial planning company called Intense.</p>
                     <p>I am John Doe, a senior advisor for an independently owned financial planning company called Intense.</p>
                    <button className='button'>Read More</button>
                </div>
            </div>
        </div>
    )
}

export default About
