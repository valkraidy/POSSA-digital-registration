import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../images/logo.jpg';
import '../styles/Navbar.css';

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMenu = () => setClick(false);

    return (
        <div className='header'>
            <nav className='navbar'>
                <a href='/' className='logo'>
                    <img src={logo} alt='logo' />
                </a>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#000000' }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <a href='/' onClick={closeMenu}>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#about' onClick={closeMenu}>About</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#testimonials' onClick={closeMenu}>News & Events</a>
                    </li>
                  <li className='nav-item'>
                        <a href='#demo' onClick={closeMenu}>Need Assistance?</a>
                    </li>  
                     {/* <li className='nav-item'>
                        <a href='#demo' onClick={closeMenu}>Demo</a>
                    </li> */}
                     <button className='butt'> 
                     <p>Registration</p>
                        <link rel="icon" href="favicon" 
                        
                        />
                    </button>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;
