import React, { useState } from 'react';
import { useData } from './Header';
import { Link } from 'react-router-dom';
import "./Sidebare.css";

function Sidebare() {
  const { isSidebarVisible, data, toggleSidebar } = useData() || { isSidebarVisible: false, data: null, toggleSidebar: () => {} };
  const [isXidebarVisible, setXidebarVisible] = useState(true);

  const toggleSidebarx = () => {
    toggleSidebar();
  };

  // If the sidebar should not be visible, return null
  if (!isSidebarVisible) return null;

  return (
    <div className={`all ${isSidebarVisible ? 'visible' : ''}`}>
      <div className="all11">
        <div className="all1">
          NOBLE QURAN
        </div>
        <div className="all2">
          <i className="fa-solid fa-x" onClick={toggleSidebarx}></i>
        </div>
      </div>
      <div className="all3"> 
        <Link to="/" className="all-link">
          <div className="all4">
            <div className="all412">
              <i className="fa-solid fa-house"></i>
            </div>
            <div className="all41">Home</div>
          </div>
        </Link>
        <Link to="/About" className="all-link">
          <div className="all4">
            <div className="all412">
              <i className="fa-solid fa-question"></i>
            </div>
            <div className="all41">About</div>
          </div>
        </Link>
        <Link to="Feedback" className="all-link">
          <div className="all4">
            <div className="all412">
              <i className="fa-solid fa-comment"></i>
            </div>
            <div className="all41">Feedback</div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Sidebare;
