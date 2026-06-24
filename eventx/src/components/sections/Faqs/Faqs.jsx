import React, { useState } from 'react';
import './Faqs.css';

const faqs = [
  {
    q: 'What is the technology conference about?',
    a: 'The conference focuses on the intersection of artificial intelligence and the media industry, exploring how AI is transforming content creation, distribution, and consumption.',
  },
  {
    q: 'Who is the conference for?',
    a: 'The conference is designed for technology professionals, researchers, entrepreneurs, and anyone interested in the field of AI. It is also suitable for businesses looking to leverage AI for their growth and success.',
  },
  {
    q: 'When and where is the conference taking place?',
    a: 'The conference takes place on May 10-11, 2023, in San Francisco, CA at the Moscone Center.',
  },
  {
    q: 'What are the main topics that will be covered at the conference?',
    a: 'Key topics include AI in journalism, deep fake detection, generative media, AI ethics in broadcasting, machine learning for audience analytics, and much more.',
  },
  {
    q: 'How can I register for the conference?',
    a: 'You can register through our website by clicking the "Book Tickets" button. Early-bird tickets are available at a discounted rate.',
  },
  {
    q: 'What is the registration fee for the conference?',
    a: 'General admission starts at $299. VIP and workshop passes are also available. Check the ticketing page for full pricing details.',
  },
  {
    q: 'Will there be any networking opportunities at the conference?',
    a: 'Absolutely! We have dedicated networking sessions, a cocktail evening, roundtable discussions, and an exhibition floor with sponsor booths.',
  },
];

const FaqItem = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item${open ? ' faq-item--open' : ''}`}>
      <button className="faq-item__trigger" onClick={() => setOpen(o => !o)}>
        <span className="faq-item__icon">{open ? '×' : '+'}</span>
        <span className="faq-item__question">{q}</span>
      </button>
      <div className="faq-item__body">
        <p className="faq-item__answer">{a}</p>
      </div>
    </div>
  );
};

const Faqs = () => (
  <section className="faqs" id="faqs">
    <div className="container">
      <h2 className="section-title faqs__title">
        <span className="dash">—</span>
        FAQs
        <span className="dash">—</span>
      </h2>

      <div className="faqs__list">
        {faqs.map((item, i) => (
          <FaqItem key={i} {...item} />
        ))}
      </div>
    </div>
  </section>
);

export default Faqs;
