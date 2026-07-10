import React, { useState } from 'react';
import '../EnrollPerformer/EnrollPerformer.css'; // Re-use form styling
import axios from 'axios'

const OrganizeEvent = () => {
  const [formdata , setFormdata] = useState({
      organization: '',
    email: '',
    eventType: '',
    activityType: '',
    targetAudience: 'global',
    date: '',
    })

    const [message , setMessage] = useState()

    const handleChange = (e) => {
      setFormdata((prev) => ({
        ...prev , [e.target.name]:e.target.value,
      }))
    }
  const handleSubmit = async(e) => {
    
    e.preventDefault()
    try {
      const res = await axios.post('http://localhost:5000/events/event',formdata)
      setMessage(res.data.message)
    } catch (error) {
      console.log(error?.response?.data?.message)
    }
  }

   return (
    <div className="page-wrapper">
      <section className="enroll-section">
        <div className="container">
          <div className="form-container">
            <h1 className="page-title">
              Organize an <span className="highlight-gold">Event</span>
            </h1>

            <p className="page-subtitle">
              Let us manage and stream your global online event with top-tier
              talent.
            </p>

            {message && <p className="success-message">{message}</p>}

            <form className="custom-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Your Name / Organization</label>
                <input
                  type="text"
                  name="organization"
                  placeholder="Enter your name or organization"
                  value={formdata.organization}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formdata.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Occasion / Event Type</label>
                <select
                  name="eventType"
                  value={formdata.eventType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select event type</option>
                  <option value="Birthday">Birthday</option>
                  <option value="Corporate Event">Corporate Event</option>
                  <option value="Memorial Service">Memorial Service</option>
                  <option value="Standup Comedy">Standup Comedy</option>
                  <option value="Special Day">Special Day</option>
                  <option value="Family Get-Together">
                    Family Get-Together
                  </option>
                </select>
              </div>

              <div className="form-group">
                <label>Activity Type</label>
                <input
                  type="text"
                  name="activityType"
                  placeholder="E.g. Musical performance, Keynote speaking..."
                  value={formdata.activityType}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Location / Target Audience Scope</label>
                <select
                  name="targetAudience"
                  value={formdata.targetAudience}
                  onChange={handleChange}
                  required
                >
                  <option value="Global">Global / All over the world</option>
                  <option value="Regional">Regional / Specific Country</option>
                </select>
              </div>

              <div className="form-group">
                <label>Estimated Date</label>
                <input
                  type="date"
                  name="date"
                  value={formdata.date}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary form-submit-btn"
              >
                Request Consultation
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OrganizeEvent;