import React from 'react';
import './App.css';
import buttons from './buttons';
import './main.css'
import Pic from './Pic.svg';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';

function Main() {
    return (
    <div className='one'>
            <img src={Pic} alt="Logo" className='pic' />
       

        <Link 
      activeClass="active" 
      to="Blog" 
      spy={true} 
      smooth={true} 
      offset={50} 
      duration={500} 
    >
      <button className='btn'>
            Explore
        </button>
    </Link>
    </div>
    );
  }
  export default Main ;