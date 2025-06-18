import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage/Homepage";
import VolunteerPage from "./pages/volunteerpg/Volunteerpg"; 
import LoginPage from "./pages/loginpage/Loginpage";
import SigninPage from "./pages/signinpage/Signinpage";
import VolunteerForm from "./pages/volunteerpg/volunteerform";
import NGOSignUp from './pages/signinpage/ngosignup'; // ✅ Corrected

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/volunteer" element={<VolunteerPage />} /> 
        <Route path="/volunteer1" element={<VolunteerForm />} /> 
        <Route path="/login" element={<LoginPage />} />
        <Route path="/popupsignin" element={<SigninPage />} />
        <Route path="/Signinpage" element={<SigninPage />} />
        <Route path="/ngosignup" element={<NGOSignUp />} /> {/* ✅ Corrected */}
      </Routes>
    </Router>
  );
}

export default App;
