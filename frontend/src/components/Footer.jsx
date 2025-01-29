import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <ul>
                    <li className='nav-item'>
                        <a href='/'>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#about'>About</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#testimonials'>News and Events</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#demo'>Dashboard</a>
                    </li>
                </ul>
                <div className='bottom'>
                    <span className='line'></span>
                    <p>All Rights Reserved • Contact Support</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
