// src/components/Hero.jsx
import React from 'react';

const Hero = () => {
  return (
    <section id="home">
      <div className="moon-container">
        <h1>Welcome to My Digital Realm!</h1><br />
        <p>
          This is Sucharitha, a Computer Science Enthusiast with a knack for Full Stack Development and Data Science. Dive into my world where my passion meets reality. From cutting-edge projects to diverse skills and experiences, get a glimpse into my journey and what drives me. Let’s connect, collaborate, and explore ideas together!
        </p><br />
        <div className="social-icons">
          <a href="https://github.com/ritaa-awesome-21/" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
          <a href="https://www.linkedin.com/in/sai-sucharitha-kale/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
          <a href="https://www.instagram.com/gayatri_k_610/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
    </section>
  );
};

export default Hero;