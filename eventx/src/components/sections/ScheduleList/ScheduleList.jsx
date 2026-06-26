import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './ScheduleList.css';
import img1 from '../../../images/1.webp';
import img2 from '../../../images/2.webp';
import img3 from '../../../images/3.webp';

const LogoIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" width="16" height="16" aria-hidden="true" style={{marginLeft: '4px'}}>
    <line x1="2" y1="2" x2="14" y2="14" stroke="black" strokeWidth="2.2" strokeLinecap="square" />
    <line x1="14" y1="2" x2="2" y2="14" stroke="black" strokeWidth="2.2" strokeLinecap="square" />
  </svg>
);

const scheduleData = {
  day1: [
    { type: 'info', title: 'Registration and check-in', time: '8:00 - 9:00 AM', location: 'Welcome Desk' },
    { type: 'speaker', title: 'AI-Newsrooms: Challenges and Opportunities', time: '9:00 - 10:00 AM', speaker: 'Robert Wilson', img: img1 },
    { type: 'speaker', title: 'Natural Language Processing in News Media', time: '10:00 AM - 11:00 AM', speaker: 'Dr. Amrit Singh', img: img2 },
    { type: 'info', title: 'Coffee Break', time: '11:00 - 11:30 AM', location: 'Reception Area' }
  ],
  day2: [
    { type: 'speaker', title: 'AI-Powered Products for Media', time: '4:00 - 5:00 PM', speaker: 'Susan Lee', img: img3 },
    { type: 'info', title: 'Networking', time: '5:00 - 5:30 PM', location: 'Reception Area' }
  ]
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const ScheduleList = () => {
  const [activeTab, setActiveTab] = useState('day1');

  const currentData = scheduleData[activeTab];

  return (
    <section className="schedule-list">
      <div className="container">
        {/* Tabs */}
        <div className="schedule-tabs">
          <button 
            className={`schedule-tab ${activeTab === 'day1' ? 'active' : ''}`}
            onClick={() => setActiveTab('day1')}
          >
            May 10th
          </button>
          <button 
            className={`schedule-tab ${activeTab === 'day2' ? 'active' : ''}`}
            onClick={() => setActiveTab('day2')}
          >
            May 11th
          </button>
        </div>

        {/* Schedule Items */}
        <motion.div 
          className="schedule-items"
          key={activeTab}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {currentData.map((item, index) => (
            <motion.div 
              key={index} 
              className={`schedule-item schedule-item--${item.type}`}
              variants={itemVariants}
            >
              {item.type === 'speaker' && (
                <div className="schedule-item__img">
                  <img src={item.img} alt={item.speaker} />
                </div>
              )}
              
              <div className="schedule-item__content">
                <div className="schedule-item__top">
                  <h3 className="schedule-item__title">{item.title}</h3>
                  <p className="schedule-item__time">{item.time}</p>
                </div>
                
                <div className="schedule-item__bottom">
                  {item.type === 'info' ? (
                    <p className="schedule-item__location">{item.location}</p>
                  ) : (
                    <>
                      <p className="schedule-item__speaker">{item.speaker}</p>
                      <div className="schedule-item__sponsor">
                        <span className="sponsored-text">Sponsored by</span>
                        <div className="sponsor-logo">
                          <LogoIcon /> <span style={{fontWeight: 800, marginLeft: '2px', color: 'black'}}>LOGO</span>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ScheduleList;
