import React from 'react';
import './Hero.css';

const Hero = () => (
  <section className="hero" id="home">
    {/* The video sits behind via VideoBackground component */}
    <div className="container">
      <div className="hero__content">
        <h1 className="hero__title">WEE<span className="logo-accent">HO</span></h1>
        <p className="hero__description">
          <strong>WEEHO</strong> is the premier media conference that brings
          together the best and brightest minds to discuss the future of AI on
          the media industry.
        </p>
        <p className="hero__date">10-11th May, 2023 • San Fransico, CA</p>
        <div className="hero__actions">
          <a href="#tickets" className="btn btn-lime">
            Book Tickets <span className="arrow">→</span>
          </a>
          <a href="#about" className="btn btn-outline-white">
            Learn More <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
