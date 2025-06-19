import React from 'react';
import { Link } from 'react-router-dom';
import './popupsignin.css';

const PopupSignUpPage = ({ onClose, onNGOSignUp ,onVolunteerSignUp }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-card">
        <button className="popup-close" onClick={onClose}>×</button>
        <h1 className="popup-title">Sign Up</h1>
        <h3 className="popup-subtitle">Sign Up as?</h3>

        <div className="popup-options">
          <button className="popup-button" onClick={onNGOSignUp}>NGO</button>
          <button className="popup-button" onClick={onVolunteerSignUp}>Volunteer</button>
        </div>
      </div>
    </div>
  );
};

export default PopupSignUpPage;
