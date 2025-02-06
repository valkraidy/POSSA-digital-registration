import React from 'react'
import './Footer.css'
import ug from './images/ug.png'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';




const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>

                <div className='firstfoot'>
                    <img src={ug} alt=""/>
                    <p className='foottext'>+233 (0) 30 250 2388 <br/> pscience@ug.edu.gh <br/> P.O.Box LG 64 Legon-Accra</p>
                  
                </div>

                <div className='myfoot'>
                 <ul className='footlist'>
                    <li className='nav-item'>
                   <a href="/" style={{ color: '#B79A64' }}>QUICK LINKS</a>    </li>
                     <li className='nav-item'>
                        <a href='/Hero'>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#about'>About us</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#'>Academics</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#Dashboard'>Dashboard</a>
                    </li>
                </ul>

                </div>

                <div>
                    <p className='lastfoot'></p>
                </div>


                <div className='linefooter-container'>
                  
                        <p className='copy'>©2024, University of Ghana</p>
                    
                        <p className='right'>All Rights Reserved • Contact Support</p>
                    
                      <div className="socials-container">
                            <FaFacebook size={20} />
                            <FaTwitter size={20} />
                            <FaInstagram size={20} />
                            <FaLinkedin size={20} />
                         </div>
                </div>

            </div>
        </div>
    )
}
export default Footer
