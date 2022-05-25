import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Fade from 'react-reveal/Fade';
import { connect } from 'react-redux';

function Home() {
 
  return (
    <div>
      <div className='background'>
        <Fade top>
          <Link to="/aboutPage" className='linkText'>
            <div className='backgroundText'>Hi, this is <br/> Gabriel's webpage !!! </div>
          </Link>
        </Fade>
      </div>
    </div>
  )
}

export default connect ()(Home)