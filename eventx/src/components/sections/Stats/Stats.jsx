import React from 'react';
import './Stats.css';

const Stats = () => (
  <section className="stats" id="stats">
    <div className="container stats__inner">
      <div className="stat-item">
        <h3 className="stat-item__title">SPEAKERS</h3>
        <p className="stat-item__value">12</p>
      </div>
      <div className="stat-item">
        <h3 className="stat-item__title">ATTENDING</h3>
        <p className="stat-item__value">600<span className="stat-item__plus">+</span></p>
      </div>
      <div className="stat-item">
        <h3 className="stat-item__title">VENUE</h3>
        <p className="stat-item__value">Pier 27</p>
      </div>
      <div className="stat-item">
        <h3 className="stat-item__title">LOCATION</h3>
        <p className="stat-item__value">SF</p>
      </div>
    </div>
  </section>
);

export default Stats;
