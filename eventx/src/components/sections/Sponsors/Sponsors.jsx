import React from 'react';
import { motion } from 'framer-motion';
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const Sponsors = () => (
  <section className="sponsors" id="sponsors">
    <motion.div 
      className="container"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h2 className="section-title sponsors__title" variants={itemVariants}>
        <span className="dash">—</span>
        Our Sponsors
        <span className="dash">—</span>
      </motion.h2>
    </motion.div>

    {/* Infinite scroll ticker — full bleed, no container constraint */}
    <motion.div 
      className="sponsors__ticker-wrap"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
      viewport={{ once: true }}
    >
      <div className="sponsors__ticker-track">
        {infiniteSponsors.map((_, i) => (
          <SponsorItem key={i} index={i} />
        ))}
      </div>
    </motion.div>
  </section>
);

export default Sponsors;
