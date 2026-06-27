import React from 'react';
import './EnrollPerformer.css';

const EnrollPerformer = () => {
  return (
    <div className="page-wrapper">
      <section className="enroll-section">
        <div className="container">
          <div className="form-container">
            <h1 className="page-title">Enroll as a <span className="highlight-gold">Performer</span></h1>
            <p className="page-subtitle">Join our global roster of talent and perform at premier online events worldwide.</p>
            
            <form className="custom-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="fullName">Full Name / Stage Name</label>
                <input type="text" id="fullName" placeholder="Enter your name" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" placeholder="Enter your email" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="talent">Primary Talent / Act</label>
                <select id="talent" required>
                  <option value="">Select your act type</option>
                  <option value="musician">Musician / Band</option>
                  <option value="comedian">Standup Comedian</option>
                  <option value="speaker">Motivational Speaker</option>
                  <option value="magician">Magician / Illusionist</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="portfolio">Portfolio / Video Link</label>
                <input type="url" id="portfolio" placeholder="https://youtube.com/..." />
              </div>

              <div className="form-group">
                <label htmlFor="bio">Short Bio</label>
                <textarea id="bio" rows="4" placeholder="Tell us a little about yourself and your experience..."></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary form-submit-btn">Submit Application</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EnrollPerformer;
