import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const Hero = ({ 
  title = "WEE", 
  titleAccent = "HO", 
  description = "<strong>WEEHO</strong> is the premier media conference that brings together the best and brightest minds to discuss the future of AI on the media industry.", 
  date = "10-11th May, 2023 • San Fransico, CA", 
  children 
}) => (
  <section className="hero" id="home">
    {/* The video sits behind via VideoBackground component */}
    <div className="container">
      <motion.div 
        className="hero__content"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h1 className="hero__title" variants={itemVariants}>
          {title}
          {titleAccent && <span className="logo-accent">{titleAccent}</span>}
        </motion.h1>
        
        {description && (
          <motion.p 
            className="hero__description" 
            variants={itemVariants} 
            dangerouslySetInnerHTML={{ __html: description }} 
          />
        )}
        
        {date && (
          <motion.p className="hero__date" variants={itemVariants}>{date}</motion.p>
        )}
        
        {children && (
          <motion.div className="hero__actions" variants={itemVariants}>
            {children}
          </motion.div>
        )}
      </motion.div>
    </div>
  </section>
);

export default Hero;
