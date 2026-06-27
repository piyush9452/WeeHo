import React from 'react';
import './ServicesTeaser.css';
import { Link } from 'react-router-dom';

const ServicesTeaser = () => {
  return (
    <section className="services-teaser">
      <div className="container services__inner">
        
        <div className="service-card">
          <div className="service-card__content">
            <h2 className="service-card__title">Perform With Us</h2>
            <p className="service-card__desc">Join our global roster of premium talent and perform at the world's best online events.</p>
            <Link to="/enroll-performer" className="btn btn-primary service-card__btn">
              Apply Now <span className="arrow">→</span>
            </Link>
          </div>
        </div>

        <div className="service-card">
          <div className="service-card__content">
            <h2 className="service-card__title">Host an Event</h2>
            <p className="service-card__desc">Let WeeHo manage, produce, and stream your next global online experience.</p>
            <Link to="/organize-event" className="btn btn-outline-white service-card__btn">
              Organise Event <span className="arrow">→</span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServicesTeaser;
