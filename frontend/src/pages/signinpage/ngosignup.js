import React, { useState } from "react";
import axios from "axios";
import { FaUser, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLock } from "react-icons/fa";
import "./signinpage.css";

function NGOsignup({ onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async () => {
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/auth/register-ngo", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        contact: formData.contact,
        address: formData.address
      });
      alert(res.data.message || "Registration successful!");
      onClose();
    } catch (err) {
      alert(err.response?.data?.message || "Error registering NGO");
    }
  };

  return (
    <div className="signin-container">
      <div className="signin-card">
        <button className="popup-close" onClick={onClose}>×</button>
        <h2>NGO Sign Up</h2>

        <div className="input-container">
          <FaUser className="icon" />
          <input type="text" name="name" placeholder="NGO Name" onChange={handleChange} required />
        </div>

        <div className="input-container">
          <FaEnvelope className="icon" />
          <input type="email" name="email" placeholder="Email ID" onChange={handleChange} required />
        </div>

        <div className="row">
          <div className="input-container">
            <FaPhoneAlt className="icon" />
            <input type="tel" name="contact" placeholder="Contact No." onChange={handleChange} required />
          </div>

          <div className="input-container">
            <FaMapMarkerAlt className="icon" />
            <input type="text" name="address" placeholder="Address" onChange={handleChange} required />
          </div>
        </div>

        <div className="row">
          <div className="input-container">
            <FaLock className="icon" />
            <input type="password" name="password" placeholder="Set Password" onChange={handleChange} required />
          </div>
          <div className="input-container">
            <FaLock className="icon" />
            <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} required />
          </div>
        </div>

        <button className="signup-button" onClick={handleSubmit}>Sign Up</button>
      </div>
    </div>
  );
}

export default NGOsignup;
