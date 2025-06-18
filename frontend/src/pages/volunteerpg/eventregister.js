import React from "react";
import "./volunteer.css";
import {
  FaUser,
  FaEnvelope,
  FaMapMarkedAlt,
  FaPhoneAlt,
  FaClock,
  FaMapMarkerAlt,
  FaCalendarAlt,
} from "react-icons/fa";

const EventForm = () => {
  return (
    <div className="volunteer-wrapper">
      <div className="volunteer-card">
        <h2>Event Register</h2>

        <div className="input-container">
          <FaUser className="icon" />
          <input type="text" placeholder="NGO Name" />
        </div>

        <div className="input-container">
          <FaEnvelope className="icon" />
          <input type="text" placeholder="Description" />
        </div>

        <div className="row">
          <div className="input-container">
            <FaMapMarkedAlt className="icon" />
            <input type="text" placeholder="Venue" />
          </div>
          <div className="input-container">
            <FaPhoneAlt className="icon" />
            <input type="tel" placeholder="Contact No." />
          </div>
        </div>

        <div className="row">
          <div className="input-container">
            <FaCalendarAlt className="icon" />
            <input type="date" placeholder="Date" />
          </div>
          <div className="input-container">
            <FaClock className="icon" />
            <input type="time" placeholder="Time" />
          </div>
        </div>

        <button className="volunteer-button">Volunteer</button>
      </div>
    </div>
  );
};

export default EventForm;
