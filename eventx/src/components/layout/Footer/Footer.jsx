import React from 'react';
import './Footer.css';
import weehoLogo from '../../../images/Weeho-Logo.png';

const Footer = () => (
  <footer className="footer" id="footer">
    <div className="container">
      {/* Top grid */}
      <div className="footer__grid">
        <div className="footer__brand">
          <a href="/" className="footer__logo">
            <img src={weehoLogo} alt="WeeHo Logo" className="footer__logo-img" />
          </a>
        </div>

        <nav className="footer__nav-col" aria-label="Homepage Variants">
          <h4 className="footer__col-heading">Homepage Variants</h4>
          <ul>
            <li><a href="/">Home 1</a></li>
            <li><a href="/home-2">Home 2</a></li>
          </ul>
        </nav>

        <nav className="footer__nav-col" aria-label="The Event">
          <h4 className="footer__col-heading">The Event</h4>
          <ul>
            <li><a href="#speakers">Speakers</a></li>
            <li><a href="#schedule">Schedule</a></li>
            <li><a href="#sponsors">Sponsors</a></li>
          </ul>
        </nav>

        <nav className="footer__nav-col" aria-label="About">
          <h4 className="footer__col-heading">About</h4>
          <ul>
            <li><a href="/venue">The Venue</a></li>
            <li><a href="/faqs">FAQs</a></li>
            <li><a href="/watch-live">Watch Live</a></li>
          </ul>
        </nav>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <p className="footer__copy">
          © {new Date().getFullYear()} Event X. Template by{' '}
          <a href="#" className="footer__copy-link">Blair</a>.
        </p>
        <div className="footer__socials">
          <a href="#" aria-label="LinkedIn" className="footer__social-link">Li</a>
          <a href="#" aria-label="Twitter" className="footer__social-link">Tw</a>
          <a href="#" aria-label="Instagram" className="footer__social-link">In</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
