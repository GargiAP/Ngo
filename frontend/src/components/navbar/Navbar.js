import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom'; 
import logo from '../../logo.svg';  

const Navbar = ({ onLoginClick, onSigninClick }) => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><Link to="/volunteer">Volunteer</Link></li>
        <li><a href="/donation">Donation</a></li>
      </ul>

      <div className="button-container">
      <button className="button login-btn" onClick={onLoginClick}>Login</button>
      <button className="button signup-btn" onClick={onSigninClick}>Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
