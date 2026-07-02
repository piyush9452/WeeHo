import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import weehoLogo from '../../../images/Weeho-Logo.png';

const Footer = () => (
  <footer className="footer" id="footer">
    <div className="container">
      {/* Top grid */}
      <div className="footer__grid">
        <div className="footer__brand">
          <Link to="/" className="footer__logo">
            <img src={weehoLogo} alt="WeeHo Logo" className="footer__logo-img" />
          </Link>
          <p className="footer__desc">
            WeeHo is the premier platform to organize, enroll, and manage your events efficiently. Join us to make your events memorable.
          </p>
        </div>

        <nav className="footer__nav-col" aria-label="Quick Links">
          <h4 className="footer__col-heading">Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/schedule">Schedule</Link></li>
            <li><Link to="/events">Events Gallery</Link></li>
            <li><Link to="/faqs">FAQs</Link></li>
          </ul>
        </nav>

        <nav className="footer__nav-col" aria-label="Participate">
          <h4 className="footer__col-heading">Participate</h4>
          <ul>
            <li><Link to="/enroll-performer">Enroll as Performer</Link></li>
            <li><Link to="/organize-event">Organize an Event</Link></li>
          </ul>
        </nav>

        <div className="footer__nav-col" aria-label="Newsletter">
          <h4 className="footer__col-heading">Stay Updated</h4>
          <p className="footer__newsletter-desc">Subscribe to our newsletter for the latest event updates.</p>
          <form className="footer__form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your email" className="footer__input" required />
            <button type="submit" className="footer__submit-btn">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <p className="footer__copy">
          © {new Date().getFullYear()} WeeHo EventX. All rights reserved.
        </p>
        <div className="footer__socials">
          <a href="#" aria-label="LinkedIn" className="footer__social-link">LinkedIn</a>
          <a href="#" aria-label="Twitter" className="footer__social-link">Twitter</a>
          <a href="#" aria-label="Instagram" className="footer__social-link">Instagram</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
