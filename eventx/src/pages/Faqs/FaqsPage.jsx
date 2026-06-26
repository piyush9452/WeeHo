import React from 'react';
import Hero from '../../components/sections/Hero/Hero';
import Faqs from '../../components/sections/Faqs/Faqs';
import Cta from '../../components/sections/Cta/Cta';
import Newsletter from '../../components/sections/Newsletter/Newsletter';
import './FaqsPage.css';

const FaqsPage = () => {
  const faqHeroDescription = `
    <span style="font-size: clamp(1.2rem, 2vw, 1.5rem); font-weight: 500; display: block; margin-bottom: 8px;">Have questions about the event?</span>
    <span style="color: var(--color-primary); font-size: clamp(1.1rem, 1.8vw, 1.35rem); font-weight: 500;">Please read below for more detailed answers</span>
  `;

  return (
    <div className="faqs-page">
      <Hero
        title="FAQs"
        titleAccent=""
        description={faqHeroDescription}
        date=""
      />
      <Faqs hideTitle={true} />
      <Cta />
      <Newsletter />
    </div>
  );
};

export default FaqsPage;
