import React from "react";
import { LogOut, History, Settings, PlusSquare, GraduationCap } from "lucide-react";
import defaultPfp from "../../assets/defaultPfp.jpg"; 
const NGOProfile = ({ user }) => {
  const avatarUrl = user.logo || defaultPfp;

  return (
    <div className="px-4 py-8 sm:px-8 max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row items-center gap-6 mb-8">
        <div className="w-32 h-32 rounded-full border-2 border-yellow-200 overflow-hidden">
          <img src={avatarUrl} alt="NGO Logo" className="w-full h-full object-cover" />
        </div>
        <div className="text-center sm:text-left">
          <h1 className="text-4xl font-bold text-gray-900">{user.ngoName}</h1>
          <p className="text-lg text-gray-600 mt-1">{user.email}</p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center sm:justify-start gap-4 mb-12">
        <button className="flex items-center text-sm sm:text-base font-semibold text-yellow-800 hover:text-yellow-600 px-4 py-2 bg-yellow-100 rounded-full border-2 border-yellow-200 transition">
          <GraduationCap className="w-5 h-5 mr-2" /> NGO Profile
        </button>
        <button className="flex items-center text-sm sm:text-base font-semibold text-yellow-800 hover:text-yellow-600 px-4 py-2 bg-yellow-100 rounded-full border-2 border-yellow-200 transition">
          <PlusSquare className="w-5 h-5 mr-2" /> Add Events
        </button>
        <button className="flex items-center text-sm sm:text-base font-semibold text-yellow-800 hover:text-yellow-600 px-4 py-2 bg-yellow-100 rounded-full border-2 border-yellow-200 transition">
          <History className="w-5 h-5 mr-2" /> Past Events
        </button>
        <button className="flex items-center text-sm sm:text-base font-semibold text-yellow-800 hover:text-yellow-600 px-4 py-2 bg-yellow-100 rounded-full border-2 border-yellow-200 transition">
          <Settings className="w-5 h-5 mr-2" /> Account Settings
        </button>
        <button className="flex items-center text-sm sm:text-base text-yellow-900 bg-yellow-100 hover:bg-yellow-200 px-4 py-2 rounded-full font-semibold transition">
          <LogOut className="w-4 h-4 mr-2" /> Sign Out
        </button>
      </div>

      <section>
        <h2 className="text-xl font-semibold text-gray-800 mb-3">NGO Info</h2>
        <ul className="text-lg text-gray-700 space-y-1 pl-3 sm:pl-8">
          <li><strong>Address:</strong> {user.address}</li>
          <li><strong>Mission:</strong> {user.mission || "No mission set"}</li>
          <li><strong>Current Projects:</strong> {user.projects?.join(', ') || "None"}</li>
        </ul>
        <div className="h-px bg-gray-300 mt-6 w-full"></div>
      </section>
    </div>
  );
};

export default NGOProfile;
