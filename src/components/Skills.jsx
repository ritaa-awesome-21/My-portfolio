// src/components/Skills.jsx
import React, { useState } from 'react';

// New, updated skills data based on your list
const skillsData = {
  languages: ['Python', 'Java', 'SQL', 'JavaScript', 'HTML5', 'CSS'],
  frameworks: ['Pandas', 'NumPy', 'Matplotlib'],
  tools: ['Git', 'Docker', 'VS Code', 'Maven', 'Power BI'],
  core: ['Machine Learning','Front-End Development','Data Analysis']
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState(null);

  const handleTabClick = (tabName) => {
    setActiveTab(prevActiveTab => prevActiveTab === tabName ? null : tabName);
  };

  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills-tabs">
        {/* Updated buttons for the new categories */}
        <button className="tab-button" onClick={() => handleTabClick('languages')}>Languages</button>
        <button className="tab-button" onClick={() => handleTabClick('frameworks')}>Frameworks & Libraries</button>
        <button className="tab-button" onClick={() => handleTabClick('tools')}>Tools</button>
        <button className="tab-button" onClick={() => handleTabClick('core')}>Core Competencies</button>
      </div>

      {/* Updated rendering blocks for each new category */}
      {activeTab === 'languages' && (
        <div className="skill-content" style={{ display: 'block' }}>
          <h3>Languages</h3>
          <div className="skills-container">
            {skillsData.languages.map(skill => <div key={skill} className="skill-item">{skill}</div>)}
          </div>
        </div>
      )}

      {activeTab === 'frameworks' && (
        <div className="skill-content" style={{ display: 'block' }}>
          <h3>Frameworks & Libraries</h3>
          <div className="skills-container">
            {skillsData.frameworks.map(skill => <div key={skill} className="skill-item">{skill}</div>)}
          </div>
        </div>
      )}

      {activeTab === 'tools' && (
        <div className="skill-content" style={{ display: 'block' }}>
          <h3>Tools</h3>
          <div className="skills-container">
            {skillsData.tools.map(skill => <div key={skill} className="skill-item">{skill}</div>)}
          </div>
        </div>
      )}

      {activeTab === 'core' && (
        <div className="skill-content" style={{ display: 'block' }}>
          <h3>Core Competencies</h3>
          <div className="skills-container">
            {skillsData.core.map(skill => <div key={skill} className="skill-item">{skill}</div>)}
          </div>
        </div>
      )}
    </section>
  );
};

export default Skills;