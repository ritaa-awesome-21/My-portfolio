// src/components/Projects.jsx
import React from 'react';
import Slider from './Slider'; // 1. Import the reusable Slider component

const projectData = [
  {
    status: "Completed & Deployed",
    title: "E-commerce AI Agent",
    goal: "To create a web application that allows users to upload e-commerce sales and advertising data to automatically calculate and visualize key performance indicators (KPIs).",
    techStack: ['Python', 'Pandas', 'React', 'Flask', 'Gemini API'],
    currentProgress: "This tool leverages the Gemini API as its core LLM to analyze uploaded CSV datasets, calculating metrics like total sales, Return on Ad Spend (ROAS), Cost Per Click (CPC), and more to provide actionable business insights.",
    githubUrl: "https://github.com/ritaa-awesome-21/ai-agent.git",
    linkedinUrl: null
  },
  {
    status: "Active Development (Work in Progress)",
    title: "Tourism Website Platform",
    goal: "To build a full-stack MERN application that provides travelers with location-based recommendations and interactive maps.",
    techStack: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Mapbox API'],
    currentProgress: "The backend REST API for handling user accounts and location data is currently under construction. The foundational component structure for the React front-end has been established.",
    githubUrl: "#", 
    linkedinUrl: "#"
  },
  {
    status: "Conceptual Design & Planning",
    title: "Smart Home Automation System",
    goal: "To design an accessible smart home system using a Raspberry Pi that integrates voice and gesture commands for controlling home appliances.",
    techStack: ['Python', 'Raspberry Pi', 'IoT', 'OpenCV', 'NLP'],
    currentProgress: "This project is in the architectural design phase. The focus is on creating a robust plan for integrating computer vision and natural language processing.",
    githubUrl: null,
    linkedinUrl: null
  },
  {
    status: "Conceptual Design & Planning",
    title: "Emergency Response Chatbot",
    goal: "To design an NLP-powered chatbot that improves emergency response times by providing immediate, automated assistance.",
    techStack: ['Python', 'BERT', 'NLP', 'Flask', 'APIs'],
    currentProgress: "This project is in the planning phase. The core challenge being researched is the fine-tuning of a BERT model on a specialized dataset.",
    githubUrl: null,
    linkedinUrl: null
  }
];

// 2. A new component to render a single project card
const ProjectCard = ({ item: project }) => (
  <div className="project-item">
    <div className="project-header">
      <h3>{project.title}</h3>
      <span className={`project-status ${
        project.status.includes('Completed') ? 'completed' : 
        project.status.includes('Active') ? 'active' : 'conceptual'
      }`}>
        {project.status}
      </span>
    </div>
    <div className="project-details">
      <h4>Project Goal</h4>
      <p>{project.goal}</p>
      <h4>Tech Stack</h4>
      <div className="tech-stack-list">
        {project.techStack.map(tech => <span key={tech} className="tech-item">{tech}</span>)}
      </div>
      <h4>Description / Status</h4>
      <p>{project.currentProgress}</p>
      
      <div className="project-links">
        {project.githubUrl && (
          <a href={project.githubUrl} className="project-link-btn" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        )}
        {project.linkedinUrl && (
          <a href={project.linkedinUrl} className="project-link-btn" target="_blank" rel="noopener noreferrer">
            Read Post on LinkedIn
          </a>
        )}
      </div>
    </div>
  </div>
);

// 3. The main component now uses the Slider
const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <Slider 
        items={projectData} 
        renderCard={(item) => <ProjectCard item={item} />} 
      />
    </section>
  );
};

export default Projects;