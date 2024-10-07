import React from 'react';
import './Blog.css';
import Articles from './Articles.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Moredetailles from './Moredetailles.js';

function Blog() {
  return (
   
      <div className='two' id='Blog'>
        <div className='txt'>
          <h2 className='h2'>Blog Feed</h2>
          <h5 className='h5'>Browse for continuous insights on  <br />technology and programming</h5>
        </div>
        <Articles />
      
      </div>
   
  );
}

export default Blog;
