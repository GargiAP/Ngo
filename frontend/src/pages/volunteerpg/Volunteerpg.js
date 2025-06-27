import React, { useState, useEffect } from 'react';
import Navbar from '../../components/navbar/Navbar';
import './volunteerpg.css';
import VolunteerForm from './volunteerform';
import EventForm from './eventregister';

function Volunteerpg() {
  const [showForm, setShowForm] = useState(false);
  const [showEventForm, setShowEventForm] = useState(false);
  const [blogPosts, setBlogPosts] = useState([]);
  const [selectedEventId, setSelectedEventId] = useState(null);
  const [registeredEvents, setRegisteredEvents] = useState([]);
  const userRole = localStorage.getItem('userRole');

  const fetchEvents = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/events');
      const data = await res.json();
      setBlogPosts(data.events || []);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="login-wrapper">
        <h2 className="page-title">Lists of NGO Events</h2>

        {userRole === 'ngo' && (
          <button className="register-main-btn" onClick={() => setShowEventForm(true)}>
            Register Event
          </button>
        )}

        <div className="blog-grid">
          {blogPosts.map((post) => (
            <div key={post._id} className="login-card">
              <img src={post.image} alt={post.title} className="blog-image" />
              <h2 className="login-title">{post.title}</h2>
              <p>{post.description}</p>
              <p><strong>Venue:</strong> {post.venue}</p>
              <div className="date-time">
                <p><strong>Date:</strong> {post.date} | <strong>Time:</strong> {post.time}</p>
              </div>
              <button
                className="register-btn"
                onClick={() => {
                  setSelectedEventId(post._id);
                  setShowForm(true);
                }}
                disabled={registeredEvents.includes(post._id)}
              >
                {registeredEvents.includes(post._id) ? "Registered" : "Register Now"}
              </button>
            </div>
          ))}
        </div>
      </div>

      {showForm && (
        <div className="modal-overlay" onClick={() => setShowForm(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <VolunteerForm
              eventId={selectedEventId}
              onClose={() => setShowForm(false)}
              onRegistered={() => {
                setRegisteredEvents([...registeredEvents, selectedEventId]);
                setShowForm(false);
              }}
            />
            <span className="close-icon" onClick={() => setShowForm(false)}>&times;</span>
          </div>
        </div>
      )}

      {showEventForm && (
        <div className="modal-overlay" onClick={() => setShowEventForm(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <EventForm onClose={() => setShowEventForm(false)} onEventAdded={fetchEvents} />
            <span className="close-icon" onClick={() => setShowEventForm(false)}>&times;</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Volunteerpg;
