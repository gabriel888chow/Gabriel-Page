import React from 'react';
import './Project.css';
import {useState} from 'react';

export default function Project() {
  const [click, setClick] = useState(false);
  const card = document.querySelector('.card');

  function clickRotate() {
    card.classList.toggle('rotated');
  }
  card.addEventListener('click', clickRotate);

  return (
    <div>
      {/* <div>Project</div> */}
      <div className='cardList'>
        <div className='card'>
          <div className='card-contents card-front'>
            <h3>Project Name:</h3>
              <h2>Chore-Door</h2>
            <hr/>
            <p>This is a Codecademy</p>
          </div>
            <div className='card-contents card-front'>
              <h3>Project Name:</h3>
                <h2>ww</h2>
              <hr/>
              <p>This is a Codecademy</p>
            </div>
              <div className='card-contents card-front'>
                <h3>Project Name:</h3>
                  <h2>Apple</h2>
                <hr/>
                <p>This is a Codecademy</p>
              </div>
        </div>
      </div>
    </div>
  )
}
