import React from 'react';
import img from './myself.png';
import './About.css';

export default function About() {
  return (
    <div className='aboutMe row'>
      <div className='photo photoColor col-5'>
        <img src={img} height={'auto'}/>
      </div>
      <div className='col-5 title'>
        <h1>GABRIEL CHOW</h1>
        <p> I joined an intensive Front-end Web developer course at Generation Hong Kong and it equipped me with the skills of HTML, CSS, JavaScript, React.</p>
      </div>
    </div>
  )
}


