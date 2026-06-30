import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { speakersData } from '../../data/appData';
import './SpeakerProfile.css';

const SpeakerProfile = () => {
  const { id } = useParams();
  const speaker = speakersData.find(s => s.id === parseInt(id, 10));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!speaker) {
    return (
      <div className="speaker-profile-not-found">
        <h2>Speaker not found</h2>
        <Link to="/">Return to Home</Link>
      </div>
    );
  }

  return (
    <div className="speaker-profile">
      {/* Banner */}
      <div className="speaker-profile__banner">
        <div className="container">
          <h1 className="speaker-profile__session-title">{speaker.sessionTitle}</h1>
          <p className="speaker-profile__session-time">
            {speaker.time} &nbsp;&nbsp;&nbsp; {speaker.date}
          </p>
        </div>
      </div>

      {/* Profile Content */}
      <div className="speaker-profile__content">
        <div className="container">
          <div className="speaker-profile__header">
            <div className="speaker-profile__info">
              <h2 className="speaker-profile__name">{speaker.name}</h2>
              <p className="speaker-profile__role">{speaker.role}</p>
            </div>
            
            {speaker.sponsorLogo && (
              <div className="speaker-profile__sponsor">
                <span className="sponsor-label">Sponsored by</span>
                <img src={speaker.sponsorLogo} alt="Sponsor Logo" className="sponsor-logo" />
              </div>
            )}
          </div>

          <motion.div 
            className="speaker-profile__image-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img src={speaker.img} alt={speaker.name} className="speaker-profile__image" />
          </motion.div>

          <div className="speaker-profile__description">
            <p>{speaker.description}</p>
            <Link to="/" className="back-link">← Back to Event</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeakerProfile;
