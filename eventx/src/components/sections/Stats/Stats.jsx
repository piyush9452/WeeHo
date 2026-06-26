import React from 'react';
import { motion } from 'framer-motion';
import './Stats.css';

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

const Stats = () => (
  <section className="stats" id="stats">
    <motion.div 
      className="container stats__inner"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div className="stat-item" variants={itemVariants}>
        <h3 className="stat-item__title">SPEAKERS</h3>
        <p className="stat-item__value">12</p>
      </motion.div>
      <motion.div className="stat-item" variants={itemVariants}>
        <h3 className="stat-item__title">ATTENDING</h3>
        <p className="stat-item__value">600<span className="stat-item__plus">+</span></p>
      </motion.div>
      <motion.div className="stat-item" variants={itemVariants}>
        <h3 className="stat-item__title">VENUE</h3>
        <p className="stat-item__value">Pier 27</p>
      </motion.div>
      <motion.div className="stat-item" variants={itemVariants}>
        <h3 className="stat-item__title">LOCATION</h3>
        <p className="stat-item__value">SF</p>
      </motion.div>
    </motion.div>
  </section>
);

export default Stats;
