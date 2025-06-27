import React, { useState } from "react";
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

const VolunteerForm = ({ eventId, onClose, onRegistered }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    contact: "",
    gender: "",
    address: "",
    medicalCondition: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/volunteer/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, eventId }) // send eventId too
      });

      const data = await res.json();
      if (res.ok) {
        alert("Volunteer registered successfully!");
        onRegistered(); // callback to mark as registered
      } else {
        alert(data.message || "Registration failed");
      }
    } catch (err) {
      console.error(err);
      alert("Server error");
    }
  };

  return (
    <div className="volunteer-wrapper">
      <div className="volunteer-card">
        <h2>Volunteer</h2>

        <div className="input-container">
          <FaUser className="icon" />
          <input
            type="text"
            name="name"
            placeholder="Username"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="input-container">
          <FaEnvelope className="icon" />
          <input
            type="email"
            name="email"
            placeholder="Email ID"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="row">
          <div className="input-container">
            <FaCalendarAlt className="icon" />
            <input
              type="number"
              name="age"
              placeholder="Age"
              value={formData.age}
              onChange={handleChange}
            />
          </div>
          <div className="input-container">
            <FaPhoneAlt className="icon" />
            <input
              type="tel"
              name="contact"
              placeholder="Contact No."
              value={formData.contact}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row">
          <div className="input-container">
            <FaTransgender className="icon" />
            <input
              type="text"
              name="gender"
              placeholder="Gender"
              value={formData.gender}
              onChange={handleChange}
            />
          </div>
          <div className="input-container">
            <FaMapMarkerAlt className="icon" />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="input-container">
          <FaStethoscope className="icon" />
          <input
            type="text"
            name="medicalCondition"
            placeholder="Medical Conditions (if any)"
            value={formData.medicalCondition}
            onChange={handleChange}
          />
        </div>

        <button className="volunteer-button" onClick={handleSubmit}>
          Volunteer
        </button>
      </div>
    </div>
  );
};

export default VolunteerForm;
