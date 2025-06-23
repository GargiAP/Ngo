import React, { useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import './loginpage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();
      if (res.ok) {
        alert("Login successful");
        console.log(data);
        // Redirect or store token if using JWT
      } else {
        alert(data.message || "Login failed");
      }
    } catch (err) {
      console.error(err);
      alert("Server error");
    }
  };

  return (
    <div className="signin-container">
      <form className="signin-card" onSubmit={handleLogin}>
        <h1 className="signin-title">Login</h1>

        <div className="input-container">
          <FaUser className="icon" />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="input-container">
          <FaLock className="icon" />
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button className="signup-button" type="submit">Login</button>

        <div className="signin-subtext">
          <p>Don’t have an account?</p>
          <p className="create-account">Create Account</p>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
