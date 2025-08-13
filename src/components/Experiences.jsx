// src/components/Experiences.jsx
import React from 'react';
import Slider from './Slider';

// Updated data with a details array and LinkedIn URL
const experienceData = [
  {
    title: "Data Science Intern",
    company: "Remarkskill and IIT Hyderabad",
    date: "June 2024 - July 2024",
    details: [
      "Performed data cleaning and preprocessing on large datasets using Python and Pandas.",
      "Assisted in the development and validation of predictive models.",
      "Created data visualizations to communicate findings to the team."
    ],
    linkedinUrl: "#" // Add link to a post about your internship
  },
  {
    title: "Web Developer",
    company: "Web Innovators",
    date: "June 2018 - February 2020",
    details: [
      "Developed and maintained front-end features for client websites using HTML, CSS, and JavaScript.",
      "Collaborated with designers to implement responsive and pixel-perfect user interfaces.",
      "Assisted in backend tasks with PHP and managed databases."
    ],
    linkedinUrl: null // No link needed for this one, so it won't show
  }
];


const ExperienceCard = ({ item }) => (
  <div className="experience-card">
    <h3>{item.title}</h3>
    <p className="exp-company">Company: {item.company}</p>
    
    <ul className="exp-details">
      {item.details.map((point, index) => (
        <li key={index}>{point}</li>
      ))}
    </ul>
    
    <div className="exp-footer">
      <span className="exp-date">Date: {item.date}</span>
      {item.linkedinUrl && (
        <a href={item.linkedinUrl} className="project-link-btn exp-link" target="_blank" rel="noopener noreferrer">
          View Post
        </a>
      )}
    </div>
  </div>
);

const Experiences = () => {
  return (
    <section id="experiences">
      <h2>Experiences</h2>
      <Slider items={experienceData} renderCard={(item) => <ExperienceCard item={item} />} />
    </section>
  );
};

export default Experiences;