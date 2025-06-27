import React, { useState } from "react";
import "./volunteer.css";
import {
  FaUser,
  FaEnvelope,
  FaMapMarkedAlt,
  FaPhoneAlt,
  FaClock,
  FaCalendarAlt,
} from "react-icons/fa";

const EventForm = ({ onClose, onEventAdded }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    venue: "",
    contact: "",
    date: "",
    time: "",
    image: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        alert("Event registered successfully!");
        onEventAdded && onEventAdded(); // if provided
        onClose && onClose();           // if provided
      } else {
        alert(data.message || "Registration failed.");
      }
    } catch (err) {
      console.error(err);
      alert("Server error");
    }
  };

  return (
    <div className="volunteer-wrapper">
      <form className="volunteer-card" onSubmit={handleSubmit}>
        <h2>Event Register</h2>

        <div className="input-container">
          <FaUser className="icon" />
          <input
            type="text"
            name="title"
            placeholder="NGO Name"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-container">
          <FaEnvelope className="icon" />
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>

        <div className="row">
          <div className="input-container">
            <FaMapMarkedAlt className="icon" />
            <input
              type="text"
              name="venue"
              placeholder="Venue"
              value={formData.venue}
              onChange={handleChange}
              required
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
              required
            />
          </div>
        </div>

        <div className="row">
          <div className="input-container">
            <FaCalendarAlt className="icon" />
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-container">
            <FaClock className="icon" />
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="input-container">
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={formData.image}
            onChange={handleChange}
            required
          />
        </div>

        <button className="volunteer-button" type="submit">Event Register</button>
      </form>
    </div>
  );
};

export default EventForm;
