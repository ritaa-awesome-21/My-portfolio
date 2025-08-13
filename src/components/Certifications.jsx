// src/components/Certifications.jsx
import React from 'react';
import Slider from './Slider';

// Updated data with description and LinkedIn URL fields
const certificationData = [
  {
    title: "Web Developer (Frontend Developer)",
    issuer: "Internshala Trainings",
    date: "10th Feb 2024",
    description: "Completed an intensive training program covering HTML, CSS, JavaScript, and React to build responsive and dynamic web applications.",
    linkedinUrl: "#" // Add link to your post about this certification
  },
  {
    title: "Summer Internship at IIT Hyderabad on Data Science using Python",
    issuer: "Remarkskill and IIT Hyderabad",
    date: "20th July 2024",
    description: "A hands-on internship focused on practical data science applications, including data manipulation with Pandas and building predictive models.",
    linkedinUrl: "#" // Add link to your post about this certification
  },
  {
    title: "Business Intelligence & PowerBI 2-Day workshop",
    issuer: "Skill Nation",
    date: "20th and 21st July 2024",
    description: "An immersive workshop on creating insightful dashboards and reports using Power BI for effective data visualization and business intelligence.",
    linkedinUrl: null // No link needed for this one, so it won't show
  }
];

// Updated card to display the new description and link
const CertificationCard = ({ item }) => (
  <div className="certification-card">
    <h3>{item.title}</h3>
    <p className="cert-issuer">Issued by: {item.issuer}</p>
    
    <p className="cert-description">{item.description}</p>
    
    <div className="cert-footer">
      <span className="cert-date">Date: {item.date}</span>
      {/* This link will only appear if you provide a linkedinUrl */}
      {item.linkedinUrl && (
        <a href={item.linkedinUrl} className="project-link-btn cert-link" target="_blank" rel="noopener noreferrer">
          View Post
        </a>
      )}
    </div>
  </div>
);

const Certifications = () => {
  return (
    <section id="certifications">
      <h2>Certifications</h2>
      <Slider items={certificationData} renderCard={(item) => <CertificationCard item={item} />} />
    </section>
  );
};

export default Certifications;