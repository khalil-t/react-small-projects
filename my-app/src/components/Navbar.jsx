// src/components/NavBar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import {SearchBar} from './'; // Import SearchBar from the same folder
import { logo } from '../utils/contants'; // Import logo from utils folder
import './Navbar.css'
const NavBar = () => {
  return (
    <nav className="nav">
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>
      <div>
        <SearchBar />
      </div>
    </nav>
  );
};

export default NavBar;
