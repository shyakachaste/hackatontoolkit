import React from 'react';
import './Navbar.css';
import { FaGithub } from 'react-icons/fa';
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

        <div className="github-container">
          <a href="https://github.com/YOUR_GITHUB_REPO" target="_blank" rel="noopener noreferrer" className="github-icon">
            <FaGithub size={30} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
