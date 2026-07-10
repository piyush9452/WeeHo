import React, { useRef, useEffect } from 'react';
import './EventsSection.css';
import { useNavigate } from 'react-router-dom';
import Home from '../../../pages/Home/Home';

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

const EventsSection = ({ title, events, theme = 'white' }) => {
  const navigate = useNavigate();
  const pastEventDetail = (event) => {
        navigate(`/events/${event.id}/detail` , {state:event})
    }
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (carouselRef.current) {
      const el = carouselRef.current;
      // Scroll to the center of the scrollable area so the middle card is active
      el.scrollLeft = (el.scrollWidth - el.clientWidth) / 2;
    }
  }, []);

  return (
    <section className={`events-section events-section--${theme}`}>
      <div className="container">
        <h2 className="section-title events-section__title">
          <span className="dash">—</span>
          {title}
          <span className="dash">—</span>
        </h2>
        
        <div className="events-section__carousel-wrap">
          <button className="carousel-btn carousel-btn--prev events-btn-prev" onClick={scrollLeft} aria-label="Previous event">
            <PrevIcon />
          </button>
          
          <div className="events-section__carousel" ref={carouselRef}>
            {events.map((event) => (
              <div className="events-section__card" key={event.id}>
                <div onClick={() =>pastEventDetail(event)} className="events-section__card-img-wrapper">
                  <img src={event.img} alt={event.title} className="events-section__card-img" />
                </div>
                <div className="events-section__card-content">
                  <p className="events-section__card-date">{event.date}</p>
                  <h3 className="events-section__card-title">{event.title}</h3>
                  <p className="events-section__card-location">{event.location}</p>
                  <p className="events-section__card-desc">{event.description}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="carousel-btn carousel-btn--next events-btn-next" onClick={scrollRight} aria-label="Next event">
            <NextIcon />
          </button>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
