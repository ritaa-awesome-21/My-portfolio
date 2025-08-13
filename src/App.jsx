// src/App.jsx
import React, { useState, useEffect } from 'react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Experiences from './components/Experiences';
import Publications from './components/Publications'; // 1. Make sure it's imported here
import AboutContact from './components/AboutContact';
import Footer from './components/Footer';
import './index.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // 2. Make sure 'publications' is in this array for scroll-tracking
    const sections = ['home', 'projects', 'skills', 'certifications', 'experiences', 'publications', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;

      for (const sectionId of sections) {
        const sectionElement = document.getElementById(sectionId);
        if (sectionElement) {
          const sectionTop = sectionElement.offsetTop;
          const sectionHeight = sectionElement.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar activeSection={activeSection} />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Certifications />
        <Experiences />
        <Publications /> {/* 3. Make sure the component is placed here in the layout */}
        <AboutContact />
      </main>
      <Footer />
    </>
  );
}

export default App;