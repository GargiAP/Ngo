// VolunteerProfile.js
import React from "react";
import {
  LogOut,
  History,
  Settings,
  PlusSquare,
  UserRound,
} from "lucide-react";
import defaultPfp from "../../assets/defaultPfp.jpg";
import "./VolunteerProfile.css";

const VolunteerProfile = () => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const avatarUrl = user.profilePic || defaultPfp;

  return (
    <div className="vol-container">
      <div className="vol-header">
        <div className="vol-avatar">
          <img src={avatarUrl} alt="Profile" className="vol-image" />
        </div>
        <div className="vol-details">
          <h1 className="vol-name">{user.name || "Volunteer"}</h1>
          <p className="vol-email">{user.email || "No email provided"}</p>
        </div>
      </div>

      <div className="vol-buttons">
        <ActionButton icon={<UserRound className="icon" />} label="My Profile" />
        <ActionButton icon={<PlusSquare className="icon" />} label="Join Events" />
        <ActionButton icon={<History className="icon" />} label="Volunteer History" />
        <ActionButton icon={<Settings className="icon" />} label="Account Settings" />
        <button
          onClick={() => {
            localStorage.clear();
            window.location.href = "/";
          }}
          className="signout-btn"
        >
          <LogOut className="icon" /> Sign Out
        </button>
      </div>

      <div className="vol-info">
        <h2 className="vol-info-title">About Me</h2>
        <ul className="vol-info-list">
          <li><strong>🧠 Skills:</strong> {user.skills || "N/A"}</li>
          <li><strong>🕒 Availability:</strong> {user.availability || "Not Provided"}</li>
          <li><strong>📋 Experience:</strong> {user.experience || "No experience yet"}</li>
        </ul>
      </div>
    </div>
  );
};

const ActionButton = ({ icon, label }) => (
  <button className="action-btn">
    {icon} {label}
  </button>
);

export default VolunteerProfile;