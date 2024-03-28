import React from 'react';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/vid3.mp4' autoPlay loop muted />
      <h1>UNHEALTHY PLANT?</h1>
      <p>Do not worry we have your back.</p>
    </div>
  );
}

export default HeroSection;
