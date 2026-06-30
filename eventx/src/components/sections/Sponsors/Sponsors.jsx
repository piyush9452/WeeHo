import React from 'react';
import { motion } from 'framer-motion';
import './Sponsors.css';

import { useNavigate } from 'react-router-dom';
import { sponsorsData } from '../../../data/appData';

const infiniteSponsors = [...sponsorsData, ...sponsorsData];

const SponsorItem = ({ sponsor, index }) => {
  const navigate = useNavigate();
  return (
    <div 
      className="sponsor-item" 
      key={index}
      onClick={() => navigate(`/sponsor/${sponsor.id}`)}
      style={{ cursor: 'pointer' }}
    >
      <img src={sponsor.logo} alt={`Sponsor ${sponsor.name}`} className="sponsor-logo-img" />
    </div>
  );
};

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
        {infiniteSponsors.map((sponsor, i) => (
          <SponsorItem key={i} sponsor={sponsor} index={i} />
        ))}
      </div>
    </motion.div>
  </section>
);

export default Sponsors;
