import React from 'react'
import './Card.css';
// import {Link} from 'react-router-dom';


export default function Card({title, text, url1, url2}) {
  return (
    <div>
      {/* <div>Project</div> */}
      <div className='cardList container'>
        <div className='card '>
          <div className='card-contents card-front front-face'>
            <div className='card-3d'>
                <h3>Project Name:</h3>
                  <h2>{title}</h2>
                <hr/>
                <p>{text}</p>
              {/* <script type="text/javascript" src="vanilla-tilt.js"></script> */}
            </div>
          </div>

          <div className='card-contents card-back back-face'>
            <div className='card-3d'>
              <h2>Done</h2>
              <div>
                <a href={url1} className="btn btn-outline-light m-2"> Github </a>
                <a href={url2} className="btn btn-outline-light m-2"> Link Page </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
