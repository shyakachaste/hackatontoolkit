import React from 'react';
import './Navbar.css';
import hackClubLogo from '../assets/flag-orpheus-top.svg';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo-container">
          <a href="https://hackclub.com" target="_blank" rel="noopener noreferrer">
            <img src={hackClubLogo} alt="Hack Club Logo" className="logo" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
