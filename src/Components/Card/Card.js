import React from 'react'
import './Card.css';
// import {Link} from 'react-router-dom';


export default function Card({title, text, url1, url2}) {
  return (
    <div>
      {/* <div>Project</div> */}
      <div className='cardList container'>
        <div className='card'>
          <div className='card-contents card-front'>
              <h3>Project Name:</h3>
                <h2>{title}</h2>
              <hr/>
              <p>{text}</p>
            <div>
              <a href={url1} className="btn btn-outline-secondary m-2"> Github </a>
              <a href={url2} className="btn btn-outline-secondary m-2"> Link Page </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
