import React from 'react';
import './HeroBanner.css';

const HeroBanner = () => {
  return (
    <div className="hero-banner">
      <div className="hero-overlay"></div>
      {/* Background gradient that mimics autumn landscape */}
      <div className="hero-content">
        <h1 className="hero-title">
          Immerse in autumn hues with<br />our offers
        </h1>
        <p className="hero-subtitle">Save up to 20%*</p>
        <button className="hero-btn">Book now</button>
      </div>
    </div>
  );
};

export default HeroBanner;
