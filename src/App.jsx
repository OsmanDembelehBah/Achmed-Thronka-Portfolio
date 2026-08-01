import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import BackgroundSlideshow from './components/BackgroundSlideshow';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Ventures from './components/Ventures/Ventures';
import Achievements from './components/Achievements/Achievements';
import Gallery from './components/Gallery/Gallery';
import VideoGallery from './components/VideoGallery/VideoGallery';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <BackgroundSlideshow />
        <Navbar />
        <Hero />
        <About />
        <Ventures />
        <Achievements />
        <Gallery />
        <VideoGallery />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
