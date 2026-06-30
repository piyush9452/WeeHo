import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { sponsorsData } from '../../data/appData';
import './SponsorProfile.css';

const SponsorProfile = () => {
  const { id } = useParams();
  const sponsor = sponsorsData.find(s => s.id === parseInt(id, 10));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!sponsor) {
    return (
      <div className="sponsor-profile-not-found">
        <h2>Sponsor not found</h2>
        <Link to="/">Return to Home</Link>
      </div>
    );
  }

  return (
    <div className="sponsor-profile">
      <div className="sponsor-profile__banner">
        <div className="container">
          <h1 className="sponsor-profile__title">Sponsor Profile</h1>
        </div>
      </div>

      <div className="sponsor-profile__content">
        <div className="container">
          <motion.div 
            className="sponsor-profile__header"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="sponsor-profile__logo-container">
              <img src={sponsor.logo} alt={sponsor.name} className="sponsor-profile__logo" />
            </div>
            <div className="sponsor-profile__info">
              <h2 className="sponsor-profile__name">{sponsor.name}</h2>
            </div>
          </motion.div>

          <div className="sponsor-profile__description">
            <p>{sponsor.description}</p>
            <Link to="/" className="back-link">← Back to Event</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorProfile;
