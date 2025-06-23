import React, { useState } from "react";
import axios from "axios";
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

function VolunteerSignup({ onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    contact: "",
    gender: "",
    address: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/auth/register-volunteer", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        contact: formData.contact,
        address: formData.address,
        age: formData.age,
        gender: formData.gender,
        role: "volunteer",
      });

      alert(response.data.message);
      onClose(); // close modal or form
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="signin-container">
      <form className="signin-card" onSubmit={handleSubmit}>
        <button className="popup-close" onClick={onClose}>×</button>

        <h2>Volunteer Sign Up</h2>

        <div className="input-container">
          <FaUser className="icon" />
          <input
            type="text"
            placeholder="Username"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>

        <div className="input-container">
          <FaEnvelope className="icon" />
          <input
            type="email"
            placeholder="Email ID"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </div>

        <div className="row">
          <div className="input-container">
            <FaCalendarAlt className="icon" />
            <input
              type="number"
              placeholder="Age"
              value={formData.age}
              onChange={(e) => setFormData({ ...formData, age: e.target.value })}
              required
            />
          </div>
          <div className="input-container">
            <FaPhoneAlt className="icon" />
            <input
              type="tel"
              placeholder="Contact No."
              value={formData.contact}
              onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
              required
            />
          </div>
        </div>

        <div className="row">
          <div className="input-container">
            <FaTransgender className="icon" />
            <input
              type="text"
              placeholder="Gender"
              value={formData.gender}
              onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
              required
            />
          </div>
          <div className="input-container">
            <FaMapMarkerAlt className="icon" />
            <input
              type="text"
              placeholder="Address"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              required
            />
          </div>
        </div>

        <div className="row">
          <div className="input-container">
            <FaLock className="icon" />
            <input
              type="password"
              placeholder="Set Password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
            />
          </div>
          <div className="input-container">
            <FaLock className="icon" />
            <input
              type="password"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              required
            />
          </div>
        </div>

        <button className="signup-button" type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default VolunteerSignup;
