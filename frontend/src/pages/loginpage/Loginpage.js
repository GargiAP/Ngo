import React from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import './loginpage.css';

const LoginPage = () => {
  return (
    <div className="signin-container">
      <form className="signin-card">
        <h1 className="signin-title">Login</h1>

        <div className="input-container">
          <FaUser className="icon" />
          <input type="text" placeholder="Username" required />
        </div>

        <div className="row">
          <div className="input-container">
            <FaUser className="icon" />
            <input type="text" placeholder="Set Password" required />
          </div>
          <div className="input-container">
            <FaLock className="icon" />
            <input type="text" placeholder="Confirm Password" required />
          </div>
        </div>

        
        <button className="signup-button" type="submit">Login</button>

        <div className="signin-subtext">
          <p>Don’t have an account?</p>
          <p className="create-account">Create Account</p>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
