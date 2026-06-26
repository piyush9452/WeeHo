import React from 'react';
import { motion } from 'framer-motion';
import './Cta.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const Cta = () => (
  <section className="cta" id="cta">
    <motion.div 
      className="container cta__inner"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h2 className="section-title cta__title" variants={itemVariants}>
        <span className="dash">—</span>
        Come and join us
        <span className="dash">—</span>
      </motion.h2>

      <motion.p className="cta__description" variants={itemVariants}>
        Book now for the premier media conference that brings together the best
        and brightest minds to discuss the future of AI on the media industry.
      </motion.p>

      <motion.div variants={itemVariants} className="cta__actions">
        <a href="/#tickets" className="btn btn-lime">
          Book Tickets <span className="arrow">→</span>
        </a>
      </motion.div>
    </motion.div>
  </section>
);

export default Cta;
