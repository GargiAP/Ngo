import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import './volunteerpg.css';
import VolunteerForm from './volunteerform';
import EventForm from './eventregister';

function Volunteerpg() {

  const [showForm, setShowForm] = useState(false);
  const [showEventForm, setShowEventForm] = useState(false);

  const blogPosts = [
    {
      id: 1,
      title: 'HungerHope',
      description: 'HungerHope is a dedicated NGO committed to eradicating hunger by providing nutritious meals to those in need. We strive to bring hope and dignity to every life we touch through the power of food.',
      venue: 'Pune',
      date: 'April 24, 2025',
      time: '11:00 a.m',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAiUn7zarjh91rmn-bbEDmb3FD2BhU4Ab_-w&s',
    },
    {
      id: 2,
      title: 'PawSafe',
      description: 'EduBridge focuses on bridging the education gap by offering quality learning resources, mentorship, and infrastructure support to underprivileged students across India.',
      venue: 'Pune',
      date: 'May 3, 2025',
      time: '10:00 a.m',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8SJzfyz7l9DuVF_h1YHQ1EVhO5lgkHaZrEA&s',
    },
    {
      id: 3,
      title: 'Fly high',
      description: 'GreenFuture is an environmental NGO working on reforestation and awareness campaigns to ensure a greener, sustainable future for the next generation.',
      venue: 'Bangalore',
      date: 'June 15, 2025',
      time: '9:30 a.m',
      image: 'https://www.aahwahan.com/Ngo-for-education-aahwahan.jpg',
    },
    {
      id: 4,
      title: 'BrightSteps',
      description: 'HealthFirst provides essential medical support and health education to remote and underserved communities through mobile clinics and awareness drives.',
      venue: 'Hyderabad',
      date: 'July 10, 2025',
      time: '2:00 p.m',
      image: 'https://www.sharanalayam.org/wp-content/uploads/2024/01/banner1.jpg',
    },
    {
      id: 5,
      title: 'SheRise',
      description: 'ShelterAid supports homeless families by offering temporary shelters, job assistance, and reintegration programs to rebuild their lives.',
      venue: 'Mumbai',
      date: 'August 20, 2025',
      time: '4:00 p.m',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoszObMs9cof_vqH-xMtlyXWQUVxQ01zgaTw&s',
    },
    {
      id: 6,
      title: 'ElderNest',
      description: 'HealthFirst provides essential medical support and health education to remote and underserved communities through mobile clinics and awareness drives.',
      venue: 'Hyderabad',
      date: 'July 10, 2025',
      time: '2:00 p.m',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSVqMISB0NdZkjRWqLrPJph5BP74O2lg10D7l9bKAXNzFcIl9MVxXXF3UfGKPiGOrNtRg&usqp=CAU',
    },
  ];
  const ngos = [
    { name: 'HungerHope', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAiUn7zarjh91rmn-bbEDmb3FD2BhU4Ab_-w&s' },
    { name: 'ElderNest', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSVqMISB0NdZkjRWqLrPJph5BP74O2lg10D7l9bKAXNzFcIl9MVxXXF3UfGKPiGOrNtRg&usqp=CAU' },
    { name: 'SheRise', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoszObMs9cof_vqH-xMtlyXWQUVxQ01zgaTw&s' },
    { name: 'PawSafe', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8SJzfyz7l9DuVF_h1YHQ1EVhO5lgkHaZrEA&s' },
    { name: 'BrightSteps', image: 'https://www.sharanalayam.org/wp-content/uploads/2024/01/banner1.jpg' }
  ];
  

  return (
    <div>
      <Navbar />
      <div className="login-wrapper">
      <h2 className="page-title">Lists of NGO Events</h2>
      <button className="register-main-btn" onClick={() => setShowEventForm(true)}>
      Register Event
      </button>

        <div className="blog-grid">
          {blogPosts.map((post) => (
            <div key={post.id} className="login-card">
              <img
                src={post.image}
                alt={post.title}
                className="blog-image"
              />
              <h2 className="login-title">{post.title}</h2>
              <p>{post.description}</p>
              <p><strong>Venue:</strong> {post.venue}</p>
              <div className="date-time">
                <p><strong>Date:</strong> {post.date}   | 
                <strong>      Time:</strong> {post.time}</p>
              </div>
              <button className="register-btn" onClick={() => setShowForm(true)}>Register Now</button>


            </div>
            

          ))}
           {}
     
        </div>
        
      </div>
      {showForm && (
        <div className="modal-overlay" onClick={() => setShowForm(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <VolunteerForm />
            <span className="close-icon" onClick={() => setShowForm(false)}>&times;</span>
            </div>
        </div>
      )}
      {/* Event Modal */}
      {showEventForm && (
        <div className="modal-overlay" onClick={() => setShowEventForm(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <EventForm />
            <span className="close-icon" onClick={() => setShowEventForm(false)}>&times;</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Volunteerpg;