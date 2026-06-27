import React from 'react';
import './EventsGallery.css';
import Hero from '../../components/sections/Hero/Hero';

const MOCK_EVENTS = [
  {
    id: 1,
    title: "Global Tech Summit 2026",
    date: "Aug 15, 2026",
    time: "10:00 AM UTC",
    category: "Corporate",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80"
  },
  {
    id: 2,
    title: "Laughs Without Borders",
    date: "Sep 02, 2026",
    time: "08:00 PM EST",
    category: "Standup Comedy",
    image: "https://images.unsplash.com/photo-1585699324551-f6c309eedeca?w=800&q=80"
  },
  {
    id: 3,
    title: "Indie Music Festival Live",
    date: "Sep 20, 2026",
    time: "05:00 PM GMT",
    category: "Concert",
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&q=80"
  },
  {
    id: 4,
    title: "Mental Health in Tech",
    date: "Oct 10, 2026",
    time: "11:00 AM PST",
    category: "Special Day",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
  }
];

const EventsGallery = () => {
  return (
    <>
      <Hero
        title="Upcoming "
        titleAccent="Events"
        description="Browse and register for premier online experiences curated by WeeHo."
        date=""
      />
      <div className="page-wrapper events-page" style={{ paddingTop: '60px' }}>
        <section className="gallery-section container">
          <div className="gallery-header">
            <h1 className="page-title">Upcoming <span className="highlight-gold">Global Events</span></h1>
            <p className="page-subtitle">Browse and register for premier online experiences curated by WeeHo.</p>
          </div>
          <div className="events-grid">
            {MOCK_EVENTS.map(event => (
              <div key={event.id} className="event-card">
                <div className="event-card__img">
                  <img src={event.image} alt={event.title} loading="lazy" />
                  <span className="event-card__badge">{event.category}</span>
                </div>
                <div className="event-card__content">
                  <h3 className="event-card__title">{event.title}</h3>
                  <div className="event-card__details">
                    <span>📅 {event.date}</span>
                    <span>⏰ {event.time}</span>
                  </div>
                  <button className="btn btn-primary event-card__btn">Register Now</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default EventsGallery;
