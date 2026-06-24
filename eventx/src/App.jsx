import React from 'react';
import VideoBackground from './components/layout/VideoBackground/VideoBackground';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import Home from './pages/Home/Home';

function App() {
  return (
    <>
      {/* Fixed full-screen video behind everything */}
      <VideoBackground />

      {/* Fixed sticky header */}
      <Header />

      {/* Page content scrolls over video */}
      <main>
        <Home />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
