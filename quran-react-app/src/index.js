import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import SurahDetails from './SurahDetails';
import './SurahDetails.css'
import About from './About'
import Feedback from './Feedback'
// Define the routes
const routes = (
  <Routes>
  <Route path="/" element={<App />} />
  <Route path="surah/:number" element={<SurahDetails />} />
  <Route path="about" element={<About />} />
  <Route path="feedback" element={<Feedback />} />
  <Route path="feedback/feedback" element={<Feedback />} />
  <Route path="about/about" element={<About />} />

  <Route path="about*" element={<Feedback />} />
  <Route path="feedback*" element={<About />} />


</Routes>

);

// Render the application using ReactDOM.createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    {routes}
  </Router>
);
