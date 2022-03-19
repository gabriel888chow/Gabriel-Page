import React from "react";
import InstagramFeed  from 'react-ig-feed';
import 'react-ig-feed/dist/index.css';

console.log(process.env);

const IGapi = () => {
    // token key was save to .env
  return <InstagramFeed token={process.env.REACT_APP_igAPI} counter="6" />
}

export default IGapi