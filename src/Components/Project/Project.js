import React from 'react';
import Card from '../Card/Card';
import './Project.css';
// import {useState} from 'react';

const list = [
  {
    id: 1,
    title: "To Do List",
    text: "This is a codecademy project, also our final group project, mainly used React, HTML, CSS, JavaScript & Bootstrap",
    url1: "https://github.com/gabriel888chow/react-tasks-manager",
    url2: "https://gabriel888chow.github.io/react-tasks-manager/",
  },
  {
    id: 2,
    title: "Wed-Assignment",
    text: "This is a codecademy project, mainly used HTML, CSS & Bootstrap",
    url1: "https://github.com/gabriel888chow/WedAssignment",
    url2: "https://gabriel888chow.github.io/WedAssignment/",
  },
  {
    id: 3,
    title: "Chore-Door",
    text: "This is a codecademy project, mainly used JavaScript, HTML & CSS",
    url1: "https://github.com/gabriel888chow/Chore-Door",
    url2: "https://gabriel888chow.github.io/Chore-Door/",
  },
  {
    id: 4,
    title: "Find Your Hat",
    text: "This is a codecademy project, mainly used JavaScript",
    url1: "https://github.com/gabriel888chow/Find-Your-Hat/tree/master/starting",
  },
  {
    id: 5,
    title: "Number Guesser",
    text: "This is a codecademy project, mainly used JavaScript",
    url1: "https://github.com/gabriel888chow/Number-Guesser/settings/pages",
    url2: "https://gabriel888chow.github.io/Number-Guesser/",
  },
  {
    id: 6,
    title: "Gabriel's Page",
    text: "This is my web page",
    url1: "https://github.com/gabriel888chow/Gabriel-Page",
    url2: "https://gabriel888chow.github.io/Gabriel-Page/",
  }
];

export default function Project() {

  return (
    <div className='bady'>
      <div className='container'>
          <div className='row'>
              {list.map(({title, text, url1, url2, id}) => (
                  <div className='col mb-auto' key={id}>
                    <Card title={title} text={text} url1={url1} url2={url2} />
                  </div>
              ))}
        </div>
      </div>
    </div>
  );
}
