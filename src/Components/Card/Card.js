import React from 'react'
import './Card.css';
// import {Link} from 'react-router-dom';
import { Fade } from 'react-reveal';


export default function Card({title, text, skill, url1, url2}) {
  return (
    <div>
      <Fade bottom>
        <div className='cardList container'>
          <div className='card'>
            <div className='card-contents card-front front-face'>
              <div className='card-3d'>
                  <h6>Project Name:</h6>
                    <h2>{title}</h2>
                  <hr/>
                  <p>{text}</p>
                  <br/>
                  <p>Skill: {skill}</p>
              </div>
            </div>
            {/* card back  */}
            <div className='card-contents card-back back-face'>
              <div className='card-3d'>
                <h2>Check my link</h2>
                <div>
                  <a href={url1} className="btn btn-outline m-2"> Github </a>
                  <a href={url2} className="btn btn-outline m-2"> Link Page </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  )
}
