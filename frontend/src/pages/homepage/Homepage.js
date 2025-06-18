import React,{useState} from  'react';
import Navbar from '../../components/navbar/Navbar';
import LoginPage from '../loginpage/Loginpage';
import PopupSignUpPage from '../signinpage/popupsignin';

import './homepage.css';

const HomePage = () => {

  const [showLogin, setShowLogin] = useState(false);  // for popup visibility  these 2 lines 
  const [showSignin, setShowSignin] = useState(false);

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
  onLoginClick={() => setShowLogin(true)}    //calling navbar with thar buttons of login and signin
  onSigninClick={() => setShowSignin(true)}
/>
     
      <section className="home-container">
        <h1>Give. Help. Impact</h1>

        <div className="info-box">
          <p>
            A Non-Governmental Organization (NGO) is a non-profit entity that operates independently of the government to address social, environmental, and humanitarian issues. These organizations work towards causes such as education, healthcare, poverty alleviation, and environmental conservation.
          </p>
          <p>
            Our website serves as a dedicated platform that connects people with NGOs, making it easier to support meaningful causes. Visitors can explore upcoming events, stay informed about ongoing activities, and find opportunities to contribute through volunteering. Whether you want to lend a helping hand, stay updated on social initiatives, or make a difference through donations, our website is the perfect bridge between passionate individuals and organizations striving for change.
          </p>
        </div>


       

        {}
        <div className="scroll-container">
  <div className="scroll-content">
    {ngos.concat(ngos).map((ngo, index) => (
      <div className="ngo-box" key={index}>
        <img src={ngo.image} alt={ngo.name} className="ngo-image" />
        <p>{ngo.name}</p>
      </div>
    ))}
  </div>
  
</div>      {/* Login Modal */}
      {showLogin && (
        <div className="modal">
          <div className="modal-content">
            <button className="close" onClick={() => setShowLogin(false)}>X</button>
            <LoginPage />
          </div>
        </div>
      )}

     {/* Signin Modal */}
{showSignin && (
  <div className="modal">
    <div className="modal-content">
      <button className="close" onClick={() => setShowSignin(false)}>X</button> {/* optional */}
      <PopupSignUpPage onClose={() => setShowSignin(false)} /> {/* ← pass it here */}
    </div>
  </div>
)}


      </section>
    </div>
  );
};

export default HomePage;
