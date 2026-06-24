import React, { useState } from 'react';
import './Newsletter.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) { setSent(true); }
  };

  return (
    <section className="newsletter" id="newsletter">
      <div className="container newsletter__inner">
        <h2 className="section-title newsletter__title">
          <span className="dash nl-dash">—</span>
          Stay up to date
          <span className="dash nl-dash">—</span>
        </h2>

        {sent ? (
          <p className="newsletter__thanks">Thanks! We'll keep you posted.</p>
        ) : (
          <form className="newsletter__form" onSubmit={handleSubmit}>
            <input
              id="newsletter-email"
              type="email"
              className="newsletter__input"
              placeholder="Email Address"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              aria-label="Email address"
            />
            <button type="submit" className="btn btn-dark newsletter__submit">
              Keep me posted
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Newsletter;
