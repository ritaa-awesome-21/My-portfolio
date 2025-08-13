// src/components/Navbar.jsx
import React from 'react';

const Navbar = ({ activeSection }) => {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="#home" className={activeSection === 'home' ? 'active' : ''}>Home</a></li>
          <li><a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>Projects</a></li>
          <li><a href="#skills" className={activeSection === 'skills' ? 'active' : ''}>Skills</a></li>
          <li><a href="#certifications" className={activeSection === 'certifications' ? 'active' : ''}>Certifications</a></li>
          <li><a href="#experiences" className={activeSection === 'experiences' ? 'active' : ''}>Experiences</a></li>
          <li><a href="#publications" className={activeSection === 'publications' ? 'active' : ''}>Publications</a></li>
          <li><a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;