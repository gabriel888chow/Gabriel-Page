import React from 'react';
import Card from '../Card/Card';
import './Project.css';
// import {useState} from 'react';

const list = [
  {
    id: 1,
    title: "Wed-Assignment",
    text: "This is a codecademy project, mainly used HTML & CSS",
    url1: "https://github.com/gabriel888chow/WedAssignment",
    url2: "https://gabriel888chow.github.io/WedAssignment/",
  },
  {
    id: 2,
    title: "B",
    text: "2",
    url: "https://www.youtube.com",
  },
  {
    id: 3,
    title: "C",
    text: "2",
    url: "https://www.youtube.com",
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
