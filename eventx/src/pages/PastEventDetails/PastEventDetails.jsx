import React from 'react';
import './PastEventDetails.css';
import { useLocation } from 'react-router-dom';

// const MOCK_EVENT = {
//   title: "Global Tech Summit 2026",
//   date: "Aug 15, 2026",
//   time: "10:00 AM UTC",
//   category: "Corporate",
//   image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
//   description:
//     "The Global Tech Summit 2026 brings together industry leaders, innovators, and developers to discuss the future of technology, AI, cloud computing, and digital transformation across the globe.",
// };

const PastEventDetails = () => {
    const {state} = useLocation();
    const MOCK_EVENT = state;
    
  return (
    <div className="page-wrapper past-events-page">
      {/* Header */}
      <div className="gallery-header">
        <h1 className="page-title">
          EVENT <span className="highlight-gold">DETAILS</span>
        </h1>
      </div>

      {/* Content */}
      <div className="event-details-container">
        <div className="event-image">
          <img src={MOCK_EVENT.img} alt={MOCK_EVENT.title} />
        </div>

        <div className="event-info">
          <span className="event-category">{MOCK_EVENT.category}</span>
          <h2 className="event-title">{MOCK_EVENT.title}</h2>

          <div className="event-meta">
            <p><strong>Date:</strong> {MOCK_EVENT.date}</p>
            <p><strong>Time:</strong> {MOCK_EVENT.time}</p>
          </div>

          <p className="event-description">{MOCK_EVENT.description}</p>
        </div>
      </div>
    </div>
  );
};

export default PastEventDetails;