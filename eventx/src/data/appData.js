import img1 from '../images/1.webp';
import img2 from '../images/2.webp';
import img3 from '../images/3.webp';
import img4 from '../images/4.webp';
import img5 from '../images/5.webp';
import weehoLogo from '../images/Weeho-Logo.png';

export const upcomingEvents = [
  { id: 1, title: 'AI in 2026', date: 'Jul 15, 2026', location: 'San Francisco, CA', img: img1, description: 'Explore the future of AI.' },
  { id: 2, title: 'Tech Summit', date: 'Aug 20, 2026', location: 'New York, NY', img: img2, description: 'Annual tech summit.' },
  { id: 3, title: 'Web3 Unlocked', date: 'Sep 05, 2026', location: 'London, UK', img: img3, description: 'Diving into Web3 and blockchain.' },
  { id: 4, title: 'React Conf', date: 'Oct 12, 2026', location: 'Online', img: img4, description: 'The biggest React conference.' },
  { id: 5, title: 'Design Masters', date: 'Nov 01, 2026', location: 'Paris, France', img: img5, description: 'Mastering modern UI/UX.' }
];

export const pastEvents = [
  { id: 101, title: 'Cloud Computing 101', date: 'Jan 10, 2026', location: 'Seattle, WA', img: img5, description: 'Basics of cloud infrastructure.' },
  { id: 102, title: 'Data Science Summit', date: 'Feb 15, 2026', location: 'Boston, MA', img: img4, description: 'Deep dive into data science.' },
  { id: 103, title: 'Frontend Masters', date: 'Mar 20, 2026', location: 'Austin, TX', img: img3, description: 'Advanced frontend techniques.' },
  { id: 104, title: 'Cybersecurity 2026', date: 'Apr 05, 2026', location: 'Chicago, IL', img: img2, description: 'Latest in cybersecurity.' },
  { id: 105, title: 'Startup Pitch', date: 'May 12, 2026', location: 'San Francisco, CA', img: img1, description: 'Founders pitching their startups.' }
];

export const speakersData = [
  { 
    id: 1, 
    name: 'Rachel Chen', 
    role: 'AI Ethics, Bloomberg', 
    img: img1,
    sessionTitle: 'Ethics and Bias in AI Systems',
    time: '1:00 - 2:00 PM',
    date: 'May 10th',
    sponsorLogo: weehoLogo,
    description: 'Rachel Chen is a leading voice in AI Ethics, specializing in creating fair and transparent AI systems.'
  },
  { 
    id: 2, 
    name: 'Dr. Amrit Singh', 
    role: 'Senior Data Scientist, Google', 
    img: img2,
    sessionTitle: 'Scalable Machine Learning Models',
    time: '2:00 - 3:00 PM',
    date: 'May 10th',
    sponsorLogo: weehoLogo,
    description: 'Dr. Amrit Singh explores the frontiers of scalable ML architectures for enterprise applications.'
  },
  { 
    id: 3, 
    name: 'John Smith', 
    role: 'Chief Digital Officer, Pixar', 
    img: img3,
    sessionTitle: 'The Future of Digital Animation',
    time: '10:00 - 11:00 AM',
    date: 'May 11th',
    sponsorLogo: weehoLogo,
    description: 'John Smith discusses the integration of AI tools in modern animation workflows and digital production.'
  },
  { 
    id: 4, 
    name: 'Dr. Catherine Kim', 
    role: 'Senior Data Scientist, Apple', 
    img: img4,
    sessionTitle: 'Computer Vision and AI in Media',
    time: '3:00 - 4:00 PM',
    date: 'May 10th',
    sponsorLogo: weehoLogo,
    description: 'Dr. Catherine Kim is pioneering new approaches to computer vision in consumer media products.'
  }
];

export const sponsorsData = [
  { id: 1, name: 'WeeHo', logo: weehoLogo, description: 'WeeHo is a leading platform for digital creators.' },
  { id: 2, name: 'Sponsor 2', logo: weehoLogo, description: 'Sponsor 2 description goes here.' },
  { id: 3, name: 'Sponsor 3', logo: weehoLogo, description: 'Sponsor 3 description goes here.' },
  { id: 4, name: 'Sponsor 4', logo: weehoLogo, description: 'Sponsor 4 description goes here.' },
  { id: 5, name: 'Sponsor 5', logo: weehoLogo, description: 'Sponsor 5 description goes here.' },
  { id: 6, name: 'Sponsor 6', logo: weehoLogo, description: 'Sponsor 6 description goes here.' },
  { id: 7, name: 'Sponsor 7', logo: weehoLogo, description: 'Sponsor 7 description goes here.' },
  { id: 8, name: 'Sponsor 8', logo: weehoLogo, description: 'Sponsor 8 description goes here.' },
];
