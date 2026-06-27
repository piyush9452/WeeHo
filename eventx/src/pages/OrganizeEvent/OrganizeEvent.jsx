import React from 'react';
import '../EnrollPerformer/EnrollPerformer.css'; // Re-use form styling

const OrganizeEvent = () => {
  return (
    <div className="page-wrapper">
      <section className="enroll-section">
        <div className="container">
          <div className="form-container">
            <h1 className="page-title">Organise an <span className="highlight-gold">Event</span></h1>
            <p className="page-subtitle">Let us manage and stream your global online event with top-tier talent.</p>
            
            <form className="custom-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="clientName">Your Name / Organization</label>
                <input type="text" id="clientName" placeholder="Enter your name" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" placeholder="Enter your email" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="occasion">Occasion / Event Type</label>
                <select id="occasion" required>
                  <option value="">Select event type</option>
                  <option value="birthday">Birthday</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="memorial">Memorial Service</option>
                  <option value="standup">Standup Comedy</option>
                  <option value="special">Special Day</option>
                  <option value="family">Family Get-Together</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="activity">Activity Type</label>
                <input type="text" id="activity" placeholder="E.g. Musical performance, Keynote speaking, etc." required />
              </div>
              
              <div className="form-group">
                <label htmlFor="scope">Location / Target Audience Scope</label>
                <select id="scope" required>
                  <option value="global">Global / All over the world</option>
                  <option value="regional">Regional / Specific Country</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="date">Estimated Date</label>
                <input type="date" id="date" required />
              </div>
              
              <button type="submit" className="btn btn-primary form-submit-btn">Request Consultation</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OrganizeEvent;
