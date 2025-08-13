// src/components/AboutContact.jsx
import React from 'react';
import contactImage from '../assets/1.jpg';

const AboutContact = () => {
  return (
    // The main section container
    <section id="contact">
      
      {/* This new container will create the two-column layout */}
      <div className="about-contact-container">

        {/* --- Column 1: About Me --- */}
        <div className="about-column">
          <h2>About Me</h2>
          <p>
            I’m deeply passionate about my craft, with a drive fueled by a desire to make a lasting impact. Whether it’s coding in Python and Java, I blend technical expertise with curiosity, always eager to learn and innovate. I thrive on solving tough challenges, working seamlessly with teams, and delivering solutions that truly matter. While I’m energized by the fast pace of technology, I also find balance in the simple beauty of life like gazing at the moon, immersing in nature, and engaging in meaningful conversations. Quick to adapt and always striving for harmony, I bring both heart and skill to everything I do.
          </p>
        </div>

        {/* --- Column 2: Image and Contact Info --- */}
        <div className="contact-column">
          <img src={contactImage} alt="Sucharitha Kale" className="contact-image" />
          <div className="contact-info-block">
            <h2>Contact Me</h2>
            <p>Feel free to reach out via email:</p>
            <a href="mailto:kalesaisucharitha@gmail.com" className="contact-btn">Send an Email</a>
            <p>Or email me directly at: <a href="mailto:kalesaisucharitha@gmail.com" className="email-link">kalesaisucharitha@gmail.com</a></p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutContact;