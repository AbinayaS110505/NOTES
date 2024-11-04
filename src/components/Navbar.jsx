// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [showProfilePopup, setShowProfilePopup] = useState(false);

  const handleProfileClick = () => {
    setShowProfilePopup(!showProfilePopup);
  };

  return (
    <nav className="navbar">
      <div className="nav-links">
        <Link to="/" className="nav-link">Img</Link>
        <Link to="/write" className="nav-link">Write</Link>
        <Link to="/draw" className="nav-link">Draw</Link>
      </div>
      <div className="profile-icon" onClick={handleProfileClick}>
        <img src="/path/to/profile.jpg" alt="Profile" className="profile-img" />
      </div>
      {showProfilePopup && (
        <div className="profile-popup">
          <h3>Profile</h3>
          <p>Name: John Doe</p>
          <p>Email: john@example.com</p>
          <button onClick={() => setShowProfilePopup(false)}>Close</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
