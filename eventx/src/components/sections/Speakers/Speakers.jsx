import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Speakers.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};
import { useNavigate } from 'react-router-dom';
import { speakersData } from '../../../data/appData';

const speakers = speakersData;

const NUM_SPEAKERS = speakers.length;

// Duplicate the array 3 times for a seamless infinite loop sliding
const items = [...speakers, ...speakers, ...speakers]; 

const LogoIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" width="14" height="14" aria-hidden="true">
    <line x1="2" y1="2" x2="14" y2="14" stroke="white" strokeWidth="2.2" strokeLinecap="square" />
    <line x1="14" y1="2" x2="2" y2="14" stroke="white" strokeWidth="2.2" strokeLinecap="square" />
  </svg>
);

const PrevIcon = () => (
  <svg width="12" height="20" viewBox="0 0 12 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 2L2 10L10 18" />
  </svg>
);

const NextIcon = () => (
  <svg width="12" height="20" viewBox="0 0 12 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 2L10 10L2 18" />
  </svg>
);

const Speakers = () => {
  const navigate = useNavigate();
  // Start in the middle section of the array
  const [currentIndex, setCurrentIndex] = useState(NUM_SPEAKERS + Math.floor(NUM_SPEAKERS / 2)); 
  const [isTransitioning, setIsTransitioning] = useState(true);

  const next = () => {
    setIsTransitioning(true);
    setCurrentIndex(prev => prev + 1);
  };
  
  const prev = () => {
    setIsTransitioning(true);
    setCurrentIndex(prev => prev - 1);
  };

  // Infinite loop boundaries check
  useEffect(() => {
    // If we move past the middle set, silently jump back
    if (currentIndex >= NUM_SPEAKERS * 2) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(currentIndex - NUM_SPEAKERS);
      }, 500); // match CSS transition duration
      return () => clearTimeout(timeout);
    }
    // If we move before the middle set, silently jump forward
    if (currentIndex <= NUM_SPEAKERS - 1) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(currentIndex + NUM_SPEAKERS);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(next, 3000);
    // Clearing the interval on index change restarts the 3s clock so it doesn't double-slide
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleDotClick = (i) => {
    const currentMod = currentIndex % NUM_SPEAKERS;
    let diff = i - currentMod;
    
    // Choose the shortest path to slide
    if (diff > Math.floor(NUM_SPEAKERS / 2)) diff -= NUM_SPEAKERS;
    if (diff < -Math.floor((NUM_SPEAKERS - 1) / 2)) diff += NUM_SPEAKERS;

    setIsTransitioning(true);
    setCurrentIndex(currentIndex + diff);
  };

  return (
    <section className="speakers" id="speakers">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Header bar */}
        <motion.div className="speakers__header" variants={itemVariants}>
          <div className="container">
            <h2 className="section-title speakers__title">
              <span className="dash">—</span>
              Speakers
              <span className="dash">—</span>
            </h2>
          </div>
        </motion.div>

        {/* Carousel */}
        <motion.div className="speakers__carousel-wrap" variants={itemVariants}>
          <div 
            className="speakers__track"
            style={{
              '--current-index': currentIndex,
              transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none'
            }}
          >
            {items.map((speaker, i) => {
              const isActive = i === currentIndex;
              return (
                <div 
                  key={`${speaker.id}-${i}`}
                  className={`speaker-card ${isActive ? 'speaker-card--active' : ''}`}
                  onClick={() => {
                    if (i !== currentIndex) {
                      setIsTransitioning(true);
                      setCurrentIndex(i);
                    }
                  }}
                >
                  {/* Image */}
                  <div 
                    className="speaker-card__img" 
                    onClick={(e) => {
                      if (isActive) {
                        e.stopPropagation();
                        navigate(`/speaker/${speaker.id}`);
                      }
                    }}
                    style={{ cursor: isActive ? 'pointer' : 'default' }}
                  >
                    <img src={speaker.img} alt={speaker.name} />
                  </div>
                  
                  {/* Overlay for inactive cards */}
                  <div className="speaker-card__overlay" />

                  {/* Normal info (hidden on hover) */}
                  <div className="speaker-card__info">
                    <div className="speaker-card__brand">
                      <LogoIcon />
                      <span>LOGO</span>
                    </div>
                    <p className="speaker-card__name">{speaker.name}</p>
                    <p className="speaker-card__role">{speaker.role}</p>
                  </div>

                  {/* CTA - appears on hover */}
                  <div 
                    className="speaker-card__cta"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/speaker/${speaker.id}`);
                    }}
                  >
                    About the speaker 
                    <span style={{ marginLeft: '4px' }}>→</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Arrows */}
          <button className="carousel-btn carousel-btn--prev" onClick={prev} aria-label="Previous speaker">
            <PrevIcon />
          </button>
          <button className="carousel-btn carousel-btn--next" onClick={next} aria-label="Next speaker">
            <NextIcon />
          </button>

          {/* Navigation Dots */}
          <div className="carousel-dots">
            {speakers.map((_, i) => (
              <button
                key={i}
                className={`dot ${i === (currentIndex % NUM_SPEAKERS) ? 'dot--active' : ''}`}
                onClick={() => handleDotClick(i)}
                aria-label={`Go to speaker ${i + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Speakers;
