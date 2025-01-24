import React from 'react';
import about from '../images/about.png';
import '../styles/About.css';

const About = () => {
    return (
        <div className='about' id='about'>
            <div className='container'>
                <img src={about} alt='john' />
                <div className='col-2'>
                    <h2>ABOUT POSSA</h2>
                    <span className='line'></span>
                    <p>We are the Political Science Students Association of the Political Science Department, University of Ghana, Accra City Campus. Guided by our core values of , we welcome you warmly aboard! Together, lets strive for excellence and meaningful impact..</p>
                    <div className="vision">
                     <h2>Our Vision</h2>
                    <p>To investigate and address issues of power, politics, and government, and their bearing on the quality of life and people's hopes and aspirations.</p>
                    </div>

                    <div className="Mission">
                     <h2>Our Mission</h2>
                     <p>To examine the origin, development, and operation of political systems using historical, comparative, interpretative, critical, quantitative and qualitative methods..</p>
                     </div>
                    <button className='button'>Read More</button>
                </div>
            </div>
        </div>
    )
}

export default About
