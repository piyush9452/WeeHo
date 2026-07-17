import React, { useState } from 'react';
import './EnrollPerformer.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const EnrollPerformer = () => {
  const [formdata, setFormdata] = useState({
    name: '',
    email: '',
    talent: '',
    bio: '',
    portfolioLink: ''
  });

  const [message, setMessage] = useState('');
const navigate = useNavigate()
  const handlechange = (e) => {
    setFormdata((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        'http://localhost:5000/performer/createPerformer',
        formdata
      );
      alert('Your request has been submitted')
      navigate(-1)
      setMessage(res?.data?.message);
    } catch (error) {
      setMessage(error.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <div className="page-wrapper">
      <section className="enroll-section">
        <div className="container">
          <div className="form-container">
            <h1 className="page-title">
              Enroll as a <span className="highlight-gold">Performer</span>
            </h1>

            <p className="page-subtitle">
              Join our global roster of talent and perform at premier online
              events worldwide.
            </p>

            <form className="custom-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="fullName">Full Name / Stage Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="name"
                  placeholder="Enter your name"
                  value={formdata.name}
                  onChange={handlechange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formdata.email}
                  onChange={handlechange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="talent">Primary Talent / Act</label>
                <select
                  id="talent"
                  name="talent"
                  value={formdata.talent}
                  onChange={handlechange}
                  required
                >
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
                <input
                  type="url"
                  id="portfolio"
                  name="portfolioLink"
                  placeholder="https://youtube.com/..."
                  value={formdata.portfolioLink}
                  onChange={handlechange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="bio">Short Bio</label>
                <textarea
                  id="bio"
                  name="bio"
                  rows="4"
                  placeholder="Tell us a little about yourself and your experience..."
                  value={formdata.bio}
                  onChange={handlechange}
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary form-submit-btn"
              >
                Submit Application
              </button>

              {message && (
                <p
                  style={{
                    marginTop: '15px',
                    textAlign: 'center',
                    color: '#fff'
                  }}
                >
                  {message}
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EnrollPerformer;