import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Newsletter.css';

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

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) { setSent(true); }
  };

  return (
    <section className="newsletter" id="newsletter">
      <motion.div 
        className="container newsletter__inner"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2 className="section-title newsletter__title" variants={itemVariants}>
          <span className="dash nl-dash">—</span>
          Stay up to date
          <span className="dash nl-dash">—</span>
        </motion.h2>

        {sent ? (
          <motion.p className="newsletter__thanks" variants={itemVariants}>Thanks! We'll keep you posted.</motion.p>
        ) : (
          <motion.form className="newsletter__form" onSubmit={handleSubmit} variants={itemVariants}>
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
          </motion.form>
        )}
      </motion.div>
    </section>
  );
};

export default Newsletter;
