import React from 'react';
import Hero from '../../components/sections/Hero/Hero';
import Sponsors from '../../components/sections/Sponsors/Sponsors';
import Speakers from '../../components/sections/Speakers/Speakers';
import Stats from '../../components/sections/Stats/Stats';
import Faqs from '../../components/sections/Faqs/Faqs';
import Newsletter from '../../components/sections/Newsletter/Newsletter';
import ServicesTeaser from '../../components/sections/ServicesTeaser/ServicesTeaser';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => (
  <div className="home">
    <Hero>
      <Link to="/events" className="btn btn-primary">
        Book Tickets <span className="arrow">→</span>
      </Link>
      <a href="/#about" className="btn btn-outline-white">
        Learn More <span className="arrow">→</span>
      </a>
    </Hero>
    <ServicesTeaser />
    <Sponsors />
    <Speakers />
    <Stats />
    <Faqs />
    <Newsletter />
  </div>
);

export default Home;
