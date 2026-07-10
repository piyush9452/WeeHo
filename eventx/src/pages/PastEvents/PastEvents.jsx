import React from 'react'
import './PastEvents.css'
import Hero from '../../components/sections/Hero/Hero';
import { useNavigate } from 'react-router-dom';


const MOCK_PAST_EVENTS = [
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


const PastEvents = () => {
    const navigate = useNavigate();

    const pastEventDetail = (event) => {
        navigate(`/pastEvents/${event.id}/detail` , {state:event})
    }
 return (
    <>
      <div className="page-wrapper past-events-page" style={{ paddingTop: '60px' }}>
        <section className="gallery-section container">
          <div className="gallery-header">
            <h1 className="page-title">PAST <span className="highlight-gold">Events</span></h1>
          </div>
          <div className="past-events-grid">
            {MOCK_PAST_EVENTS.map(event => (
              <div key={event.id} className="past-event-card">
                <div className="past-event-card__img">
                  <img src={event.image} alt={event.title} loading="lazy" />
                  <span className="past-event-card__badge">{event.category}</span>
                </div>
                <div className="past-event-card__content">
                  <h3 className="past-event-card__title">{event.title}</h3>
                  <div className="past-event-card__details">
                    <span>📅 {event.date}</span>
                    <span>⏰ {event.time}</span>

                  </div>
                  <button onClick={() => pastEventDetail(event)} className="btn btn-primary past-event-card__btn">KNOW MORE</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default PastEvents;
