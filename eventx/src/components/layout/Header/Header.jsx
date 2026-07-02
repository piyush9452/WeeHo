import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import weehoLogo from '../../../images/Weeho-Logo.png';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Events', href: '/events' },
  { label: 'Performers', href: '/enroll-performer' },
  { label: 'Host an Event', href: '/organize-event' },
  { label: 'Schedule', href: '/schedule' },
  { label: 'FAQs', href: '/faqs' },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}${menuOpen ? ' header--menu-open' : ''}`}>
      <div className="container header__inner">
        {/* Logo */}
        <Link to="/" className="header__logo" onClick={() => setMenuOpen(false)}>
          <img src={weehoLogo} alt="WeeHo Logo" className="header__logo-img" />
        </Link>

        {/* Hamburger */}
        <button
          className={`hamburger${menuOpen ? ' hamburger--open' : ''}`}
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Full Screen Menu */}
      <div className={`mobile-drawer${menuOpen ? ' mobile-drawer--open' : ''}`}>
        <div className="mobile-drawer__content">
          <ul className="mobile-nav__list">
            {navLinks.map(link => (
              <li key={link.label}>
                <Link
                  to={link.href}
                  className="mobile-nav__link"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          
          <div className="mobile-drawer__footer">
            <Link 
              to="/events" 
              className="btn btn-yellow-reversed mobile-drawer__btn"
              onClick={() => setMenuOpen(false)}
            >
              Book Tickets <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
