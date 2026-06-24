import React from 'react';
import './Sponsors.css';

/* ── Inline SVG brand-placeholder icon (× mark + COMPANY LOGO) ── */
const LogoIcon = () => (
  <svg className="brand-x" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <line x1="2" y1="2" x2="14" y2="14" stroke="currentColor" strokeWidth="2.2" strokeLinecap="square"/>
    <line x1="14" y1="2" x2="2" y2="14" stroke="currentColor" strokeWidth="2.2" strokeLinecap="square"/>
  </svg>
);

const sponsors = [
  'LOGO', 'LOGO', 'LOGO', 'LOGO', 'LOGO', 'LOGO', 'LOGO', 'LOGO',
];

/* Duplicate the array to create a seamless infinite loop */
const infiniteSponsors = [...sponsors, ...sponsors];

const SponsorItem = ({ index }) => (
  <div className="sponsor-item" key={index}>
    <LogoIcon />
    <div className="sponsor-label">
      <span className="sponsor-company">COMPANY</span>
      <span className="sponsor-name">LOGO</span>
    </div>
  </div>
);

const Sponsors = () => (
  <section className="sponsors" id="sponsors">
    <div className="container">
      <h2 className="section-title sponsors__title">
        <span className="dash">—</span>
        Our Sponsors
        <span className="dash">—</span>
      </h2>
    </div>

    {/* Infinite scroll ticker — full bleed, no container constraint */}
    <div className="sponsors__ticker-wrap">
      <div className="sponsors__ticker-track">
        {infiniteSponsors.map((_, i) => (
          <SponsorItem key={i} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default Sponsors;
