import React from 'react';
// import Link function
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useState } from 'react';

export default function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
  return (
    <nav className='navbarlist'>
      <div className='nav-container'>
        {/* logo */}
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to="/Gabriel-Page" activeclassname="active" className='nav-links'>
              Home Page
            </Link>
          </li>
          <li className='nav-item'>
            <Link to="/aboutPage" activeclassname="active" className='nav-links'>
              About Page
            </Link>
          </li>
          <li className='nav-item'>
            <Link to="/projectPage" activeclassname="active" className='nav-links'>
              Project Page
            </Link>
          </li>
        </ul>
        <div className='nav-icon' onClick={handleClick}>
          <i className={click ? 'uil uil-multiply' : 'uil uil-bars'} ></i>
        </div>
      </div> 
    </nav>
  )
}
