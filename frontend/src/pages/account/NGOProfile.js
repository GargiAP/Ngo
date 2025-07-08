// NGOProfile.js
import React from "react";
import {
  LogOut,
  History,
  Settings,
  PlusSquare,
  GraduationCap,
} from "lucide-react";
import defaultPfp from "../../assets/defaultPfp.jpg";
import "./NGOProfile.css";

const NGOProfile = () => {
  const user = JSON.parse(localStorage.getItem("user") || "null");

  if (!user) {
    return <div className="ngo-error">User data not found. Please log in again.</div>;
  }

  const avatarUrl = user.logo || defaultPfp;

  return (
    <div className="ngo-container">
      <div className="ngo-header">
        <div className="ngo-avatar">
          <img src={avatarUrl} alt="NGO Logo" className="ngo-image" />
        </div>
        <div className="ngo-details">
          <h1 className="ngo-name">{user.ngoName || "NGO"}</h1>
          <p className="ngo-email">{user.email || "Email not available"}</p>
        </div>
      </div>

      <div className="ngo-buttons">
        <ActionButton icon={<GraduationCap className="icon" />} label="NGO Profile" />
        <ActionButton icon={<PlusSquare className="icon" />} label="Add Events" />
        <ActionButton icon={<History className="icon" />} label="Past Events" />
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

      <section className="ngo-info">
        <h2 className="ngo-info-title">NGO Info</h2>
        <ul className="ngo-info-list">
          <li><strong>📍 Address:</strong> {user.address || "Not provided"}</li>
          <li><strong>🎯 Mission:</strong> {user.mission || "No mission set"}</li>
          <li><strong>📁 Current Projects:</strong> {user.projects?.join(', ') || "None"}</li>
        </ul>
      </section>
    </div>
  );
};

const ActionButton = ({ icon, label }) => (
  <button className="action-btn">
    {icon} {label}
  </button>
);

export default NGOProfile;