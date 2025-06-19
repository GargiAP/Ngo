import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import LoginPage from '../loginpage/Loginpage';
import PopupSignUpPage from '../signinpage/popupsignin';
import NGOsignup from '../signinpage/ngosignup';
import SigninPage from '../signinpage/Signinpage'; // ✅ make sure this is the correct path
import './homepage.css';

const HomePage = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignin, setShowSignin] = useState(false);
  const [showNGOSignup, setShowNGOSignup] = useState(false);
  const [showVolunteerSignup, setShowVolunteerSignup] = useState(false); // ✅ added missing state

  const ngos = [
    { name: 'HungerHope', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAiUn7zarjh91rmn-bbEDmb3FD2BhU4Ab_-w&s' },
    { name: 'ElderNest', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSVqMISB0NdZkjRWqLrPJph5BP74O2lg10D7l9bKAXNzFcIl9MVxXXF3UfGKPiGOrNtRg&usqp=CAU' },
    { name: 'SheRise', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoszObMs9cof_vqH-xMtlyXWQUVxQ01zgaTw&s' },
    { name: 'PawSafe', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8SJzfyz7l9DuVF_h1YHQ1EVhO5lgkHaZrEA&s' },
    { name: 'BrightSteps', image: 'https://www.sharanalayam.org/wp-content/uploads/2024/01/banner1.jpg' }
  ];

  return (
    <div>
      <Navbar 
        onLoginClick={() => setShowLogin(true)}    
        onSigninClick={() => setShowSignin(true)}
      />

      <section className="home-container">
        <h1>Give. Help. Impact</h1>

        <div className="info-box">
          <p>
            A Non-Governmental Organization (NGO) is a non-profit entity that operates independently of the government to address social, environmental, and humanitarian issues.
          </p>
          <p>
            Our website serves as a dedicated platform that connects people with NGOs, making it easier to support meaningful causes. Visitors can explore upcoming events, stay informed about ongoing activities, and find opportunities to contribute through volunteering.
          </p>
        </div>

        <div className="scroll-container">
          <div className="scroll-content">
            {ngos.concat(ngos).map((ngo, index) => (
              <div className="ngo-box" key={index}>
                <img src={ngo.image} alt={ngo.name} className="ngo-image" />
                <p>{ngo.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Login Modal */}
        {showLogin && (
          <div className="modal">
            <div className="modal-content">
              <button className="close" onClick={() => setShowLogin(false)}>X</button>
              <LoginPage />
            </div>
          </div>
        )}

        {/* Signin Choice Modal */}
        {showSignin && (
          <div className="modal">
            <div className="modal-content">
              <button className="close" onClick={() => setShowSignin(false)}>X</button>
              <PopupSignUpPage 
                onClose={() => setShowSignin(false)} 
                onNGOSignUp={() => {
                  setShowSignin(false);
                  setShowNGOSignup(true);
                }}
                onVolunteerSignUp={() => {
                  setShowSignin(false);
                  setShowVolunteerSignup(true);
                }}
              />
            </div>
          </div>
        )}

        {/* NGO Sign Up Modal */}
        {showNGOSignup && (
          <div className="modal">
            <div className="modal-content">
              <NGOsignup onClose={() => setShowNGOSignup(false)} />
            </div>
          </div>
        )}

        {/* Volunteer Sign Up Modal */}
        {showVolunteerSignup && (
          <div className="modal">
            <div className="modal-content">
              <SigninPage onClose={() => setShowVolunteerSignup(false)} />
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default HomePage;
