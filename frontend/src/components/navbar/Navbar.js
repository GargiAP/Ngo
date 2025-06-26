import React from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../logo.svg';
import defaultPfp from '../../assets/defaultPfp.jpg';

const Navbar = ({ onLoginClick, onSigninClick }) => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  const user = JSON.parse(localStorage.getItem('user'));
  const profileImg = user?.profileImage || defaultPfp;

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
    window.location.reload(); // Refresh to reflect logged-out state
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/volunteer">Volunteer</Link></li>
        <li><Link to="/donation">Donation</Link></li>
      </ul>

      <div className="button-container">
        {!isLoggedIn ? (
          <>
            <button className="button login-btn" onClick={onLoginClick}>Login</button>
            <button className="button signup-btn" onClick={onSigninClick}>Sign Up</button>
          </>
        ) : (
          <>
            <Link to="/profile" title="Profile">
              <img src={profileImg} alt="Profile" className="profile-icon" />
            </Link>
            <button className="button logout-btn" onClick={handleLogout}>Logout</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
