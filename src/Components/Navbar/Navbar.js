import React from 'react';
// import Link function
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useState } from 'react';
// import logo1 from './logo1.png';
// import logo2 from './logo2.png';
import { connect } from 'react-redux';

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    // const [navbar, setNavbar] = useState(false);

    // const changeIogo = () => {
    //   if (window.scrollY >= 80) {
    //     setNavbar(true);
    //   } else {
    //     setNavbar(false);
    //   }
    // };
    
    // window.addEventListener('scroll', changeIogo);

  return (
    <nav className='navbarlist'>
      {/* <div className={navbar ? 'logo1' : 'logo2'}></div> */}
      <div className='nav-container'>
        {/* logo */}
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to="/" activeclassname="active" className='nav-links'>
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

export default connect ()(Navbar)