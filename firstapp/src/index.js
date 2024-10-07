import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './Main.js';
import Blog from './Blog.js';
import Aboutus from './Aboutus.js';
import End from './End.js';
import Footer from './Footer';
import Moredetailles from './Moredetailles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/main" element={<Main />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/end" element={<End />} />
        <Route path="/Moredetailles" element={<Moredetailles />} />
       
      </Routes>

    </Router>
  </React.StrictMode>
);

reportWebVitals();
