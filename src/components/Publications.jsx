// src/components/Publications.jsx
import React from 'react';

// Your publication data, including the bullet points
const publicationsData = [
  {
    title: "Gestational Diabetes Detection Using Machine Learning and Deep Learning",
    date: "Published - March 2025-Annual International Conference on Recent Trends in Healthcare Innovation (AICRTHI) - 2024",
    link: "#", // Add a link to the publication if available
    details: [
      "Developed and deployed a machine learning model for early diabetes detection in pregnant women, achieving 92% accuracy, striving for excellence.",
      "Leveraged patient medical data and executed advanced feature engineering techniques to optimize model performance.",
      "Analyzed over 10,000 medical records, and utilized ensemble learning methods (Random Forest, XGBoost) to improve predictive accuracy and ensure model robustness.",
      "Optimized hyperparameters and implemented rigorous validation to enhance reliability."
    ]
  }
  // You can add more publication objects here in the future
];

// Updated card component to display the list of details
const PublicationCard = ({ title, date, link, details }) => (
  <a href={link} className="publication-card" target="_blank" rel="noopener noreferrer">
    <div className="publication-card-content">
      <h3>{title}</h3>
      <ul>
        {details.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
      <span className="date">{date}</span>
    </div>
  </a>
);

const Publications = () => {
  return (
    <section id="publications">
      <h2>Research & Publications</h2>
      <div className="publication-cards-container">
        {publicationsData.map((pub, index) => (
          <PublicationCard
            key={index}
            title={pub.title}
            date={pub.date}
            link={pub.link}
            details={pub.details}
          />
        ))}
      </div>
    </section>
  );
};

export default Publications;