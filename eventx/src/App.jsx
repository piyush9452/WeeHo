import React from 'react';
import { Routes, Route } from 'react-router-dom';
import VideoBackground from './components/layout/VideoBackground/VideoBackground';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import Home from './pages/Home/Home';
import Schedule from './pages/Schedule/Schedule';
import FaqsPage from './pages/Faqs/FaqsPage';
import EnrollPerformer from './pages/EnrollPerformer/EnrollPerformer';
import OrganizeEvent from './pages/OrganizeEvent/OrganizeEvent';
import EventsGallery from './pages/EventsGallery/EventsGallery';
import SpeakerProfile from './pages/SpeakerProfile/SpeakerProfile';
import PastEventDetails from './pages/PastEventDetails/PastEventDetails';

function App() {
  return (
    <>
      {/* Fixed full-screen video behind everything */}
      <VideoBackground />

      {/* Fixed sticky header */}
      <Header />

      {/* Page content scrolls over video */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/faqs" element={<FaqsPage />} />
          <Route path="/enroll-performer" element={<EnrollPerformer />} />
          <Route path="/organize-event" element={<OrganizeEvent />} />
          <Route path="/events" element={<EventsGallery />} />
          <Route path="/speaker/:id" element={<SpeakerProfile />} />
          <Route path= "/events/:id/detail" element={<PastEventDetails/>}/>
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
