import React from "react";
import "./signinpage.css";
import {
  FaUser,
  FaEnvelope,
  FaCalendarAlt,
  FaPhoneAlt,
  FaTransgender,
  FaMapMarkerAlt,
  FaLock,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function SigninPage() {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/");
  };

  return (
    <div className="signin-container">
      <div className="signin-card">
        {/* Close Button */}
        <button className="popup-close" onClick={handleClose}>×</button>

        <h2>Sign Up</h2>

        <div className="input-container">
          <FaUser className="icon" />
          <input type="text" placeholder="Username" />
        </div>

        <div className="input-container">
          <FaEnvelope className="icon" />
          <input type="email" placeholder="Email ID" />
        </div>

        <div className="row">
          <div className="input-container">
            <FaCalendarAlt className="icon" />
            <input type="number" placeholder="Age" />
          </div>
          <div className="input-container">
            <FaPhoneAlt className="icon" />
            <input type="tel" placeholder="Contact No." />
          </div>
        </div>

        <div className="row">
          <div className="input-container">
            <FaTransgender className="icon" />
            <input type="text" placeholder="Gender" />
          </div>
          <div className="input-container">
            <FaMapMarkerAlt className="icon" />
            <input type="text" placeholder="Address" />
          </div>
        </div>

        <div className="row">
          <div className="input-container">
            <FaLock className="icon" />
            <input type="password" placeholder="Set Password" />
          </div>
          <div className="input-container">
            <FaLock className="icon" />
            <input type="password" placeholder="Confirm Password" />
          </div>
        </div>

        <button className="signup-button">Sign Up</button>
      </div>
    </div>
  );
}

export default SigninPage;
