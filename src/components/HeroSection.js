import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Hackathon Toolkit</h1>
        <p className="hero-description">
          An open-source project designed to help high schoolers easily organize and run hackathons.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
