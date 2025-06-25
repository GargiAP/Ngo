import React from 'react';
import './studentprofile.css'; // You can create and style this
import avatar from './avatar.png'; // Placeholder image if needed

const StudentProfilePage = ({
  name = 'Student',
  email = 'student@example.com',
  year = '2nd Year',
  prn = '0123456789',
  specialization = 'Computer Science',
  course = 'B.Tech',
  upcomingImmersions = ['NTU Singapore', 'Tokyo University'],
  pastImmersions = ['Europe Circuit', 'Boston University']
}) => {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="avatar-container">
          <img src={avatar} alt="Avatar" className="avatar-img" />
          <div className="avatar-fallback">{name.charAt(0)}</div>
        </div>
        <div className="profile-info">
          <h1>{name}</h1>
          <p>{email}</p>
        </div>
      </div>

      <div className="profile-buttons">
        <button>My Profile</button>
        <button>New Immersions</button>
        <button>Past Immersions</button>
        <button>Account Settings</button>
        <button>Sign Out</button>
      </div>

      <div className="profile-sections">
        <section>
          <h2>Academic Details</h2>
          <ul>
            <li><strong>Course:</strong> {course}</li>
            <li><strong>Year:</strong> {year}</li>
            <li><strong>PRN:</strong> {prn}</li>
            <li><strong>Specialization:</strong> {specialization}</li>
          </ul>
        </section>

        <section>
          <h2>Upcoming Immersions</h2>
          <div className="chips">
            {upcomingImmersions.map((place, idx) => (
              <span key={idx} className="chip">{place}</span>
            ))}
          </div>
        </section>

        <section>
          <h2>Past Immersions</h2>
          <div className="chips">
            {pastImmersions.map((place, idx) => (
              <span key={idx} className="chip">{place}</span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default StudentProfilePage;
