import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
 
  return (
    <div>
      <div className='background'>
        <Link to="/aboutPage" className='linkText'>
          <div className='backgroundText'>Hi, this is <br/> Gabriel's webpage !!! </div>
        </Link>
      </div>
    </div>
  )
}
