import React from 'react';
import Card from '../Card/Card';
import './Project.css';
// import {useState} from 'react';

const list = [
  {
    id: 1,
    title: "To Do List",
    text: "This is a codecademy project, also our final group project. This is a To Do List, you can use the webapp to notes what you will do later.",
    skill: "React, HTML, CSS, JavaScript & Bootstrap",
    url1: "https://github.com/gabriel888chow/react-tasks-manager",
    url2: "https://gabriel888chow.github.io/react-tasks-manager/",
  },
  {
    id: 2,
    title: "Wed-Assignment",
    text: "It is a codecademy project, this task is to design and create a landing page for a new school.",
    skill: "HTML, CSS & Bootstrap",
    url1: "https://github.com/gabriel888chow/WedAssignment",
    url2: "https://gabriel888chow.github.io/WedAssignment/",
  },
  {
    id: 3,
    title: "Chore-Door",
    text: "This is a codecademy project, the mission is to construct a single-page website that plays a fully-functional game.",
    skill: "JavaScript, HTML & CSS",
    url1: "https://github.com/gabriel888chow/Chore-Door",
    url2: "https://gabriel888chow.github.io/Chore-Door/",
  },
  {
    id: 4,
    title: "Find Your Hat",
    text: "This is a codecademy project, in this project, is building an interactive terminal game.",
    skill: "JavaScript",
    url1: "https://github.com/gabriel888chow/Find-Your-Hat/tree/master/starting",
  },
  {
    id: 5,
    title: "Number Guesser",
    text: "This is a codecademy project, in this project, is write JavaScript functions to power a small guessing game.",
    skill: "JavaScript",
    url1: "https://github.com/gabriel888chow/Number-Guesser",
    url2: "https://gabriel888chow.github.io/Number-Guesser/",
  },
  {
    id: 6,
    title: "Gabriel's Page",
    text: "This is my web page",
    skill: "React, HTML, CSS, JavaScript & Bootstrap",
    url1: "https://github.com/gabriel888chow/Gabriel-Page",
    url2: "https://gabriel888chow.github.io/Gabriel-Page/",
  },
  {
    id: 7,
    title: "Furniture Store",
    text: "This is my own project, I used php and mySQL to create a shopping website.",
    skill: "PHP & mySQL",
    url1: "https://github.com/gabriel888chow/php-mysql",
    url2: "https://github.com/gabriel888chow/php-mysql#readme",
  }
];

export default function Project() {

  return (
    <div className='bady'>
      <div className='container'>
          <div className='row'>
              {list.map(({title, text, skill, url1, url2, id}) => (
                  <div className='col mb-auto' key={id}>
                    <Card title={title} text={text} skill={skill} url1={url1} url2={url2} />
                  </div>
              ))}
        </div>
      </div>
    </div>
  );
}
