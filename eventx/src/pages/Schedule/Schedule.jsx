import React, { useEffect } from 'react';
import Hero from '../../components/sections/Hero/Hero';
import ScheduleList from '../../components/sections/ScheduleList/ScheduleList';
import Cta from '../../components/sections/Cta/Cta';
import Newsletter from '../../components/sections/Newsletter/Newsletter';
import './Schedule.css';

const Schedule = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="schedule-page">
      <Hero
        title="Schedule"
        titleAccent=""
        description="We have packed schedule over two days with 12 speakers. Here is the detailed daily outline of events and times."
        date=""
      />
      <ScheduleList />
      <Cta />
      <Newsletter />
    </div>
  );
};

export default Schedule;
