import React from 'react';
import Hero from '../../components/sections/Hero/Hero';
import Sponsors from '../../components/sections/Sponsors/Sponsors';
import Speakers from '../../components/sections/Speakers/Speakers';
import Stats from '../../components/sections/Stats/Stats';
import Faqs from '../../components/sections/Faqs/Faqs';
import Newsletter from '../../components/sections/Newsletter/Newsletter';
import './Home.css';

const Home = () => (
  <div className="home">
    <Hero>
      <a href="/#tickets" className="btn btn-lime">
        Book Tickets <span className="arrow">→</span>
      </a>
      <a href="/#about" className="btn btn-outline-white">
        Learn More <span className="arrow">→</span>
      </a>
    </Hero>
    <Sponsors />
    <Speakers />
    <Stats />
    <Faqs />
    <Newsletter />
  </div>
);

export default Home;
