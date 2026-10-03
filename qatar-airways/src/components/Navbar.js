import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Announcement Bar */}
      <div className="announcement-bar">
        <span className="info-icon">ℹ</span>
        <span>18 June 2026: Updates on Travelling with Power Banks</span>
        <button className="close-btn">✕</button>
      </div>

      {/* Main Navbar */}
      <nav className="navbar">
        <div className="nav-logo">
          <div className="logo-container">
            <div className="logo-oryx">✦</div>
            <div className="logo-text">
              <span className="qatar">QATAR</span>
              <span className="airways">AIRWAYS</span>
            </div>
          </div>
          <div className="oneworld-badge">oneworld</div>
        </div>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><a href="/explore">Explore</a></li>
          <li><a href="/book">Book</a></li>
          <li><a href="/experience">Experience</a></li>
          <li><a href="/privilege-club">Privilege Club</a></li>
        </ul>

        <div className="nav-right">
          <a href="/help" className="nav-help">Help</a>
          <button className="icon-btn search-icon">🔍</button>
          <div className="lang-dot"></div>
          <span className="lang-text">EN</span>
          <button className="icon-btn user-icon">👤</button>
          <a href="/login" className="login-link">Log in | Sign up</a>
          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
