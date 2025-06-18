import React from "react";
import "./volunteer.css";
import {
  FaUser,
  FaEnvelope,
  FaCalendarAlt,
  FaPhoneAlt,
  FaTransgender,
  FaMapMarkerAlt,
  FaStethoscope,
} from "react-icons/fa";

const VolunteerForm = () => {
  return (
    <div className="volunteer-wrapper">
      <div className="volunteer-card">
        <h2>Volunteer</h2>

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

        <div className="input-container">
          <FaStethoscope className="icon" />
          <input type="text" placeholder="Medical Conditions (if any)" />
        </div>

        <button className="volunteer-button">Volunteer</button>
      </div>
    </div>
  );
};

export default VolunteerForm;