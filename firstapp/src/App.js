import React from 'react';
import logo from './logo.Svg';
import './App.css';
import buttons from './buttons';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './Main.js';
import Blog from './Blog.js';
import Aboutus from './Aboutus.js';
import End from './End.js';
import Footer from './Footer';
import Moredetailles from './Moredetailles';
function App() {
  return (
    
    <div className="App" id='Home'>
      <header className="App-header">
        <div className='all'>
          <div className="logo-container">
            <img src={logo} alt="Logo" className='lmg' />
          </div>
          <div className="buttons-container">
            <ul className='ul'>
              {buttons.map((button, index) => {
                const { name, url } = button;
                return (
                  <li className='li' key={index}>
                    <Link   activeClass="active" 
      to={url}  
      spy={true} 
      smooth={true} 
      offset={50} 
      duration={500} >
                      {name}



                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </header>
      <Main />
      <Blog />
      <Aboutus />
      <End />
      <Footer />
    </div>
  );
}

export default App;
