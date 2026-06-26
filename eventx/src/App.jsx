import React from 'react';
import { Routes, Route } from 'react-router-dom';
import VideoBackground from './components/layout/VideoBackground/VideoBackground';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import Home from './pages/Home/Home';
import Schedule from './pages/Schedule/Schedule';
import FaqsPage from './pages/Faqs/FaqsPage';

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
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
