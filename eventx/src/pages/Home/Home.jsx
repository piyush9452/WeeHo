import React from 'react';
import Hero from '../../components/sections/Hero/Hero';
import EventsSection from '../../components/sections/EventsSection/EventsSection';
import Speakers from '../../components/sections/Speakers/Speakers';
import Stats from '../../components/sections/Stats/Stats';
import Faqs from '../../components/sections/Faqs/Faqs';
import Newsletter from '../../components/sections/Newsletter/Newsletter';
import { upcomingEvents, pastEvents } from '../../data/appData';
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
    <EventsSection title="Upcoming Events" events={upcomingEvents} theme="white" />
    <EventsSection title="Past Events" events={pastEvents} theme="black" />
    <Speakers />
    <Stats />
    <Faqs />
    <Newsletter />
  </div>
);

export default Home;
