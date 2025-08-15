import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillsData = [
    { category: "Languages", items: ["C", "Java"] },
    { category: "Backend", items: ["Spring Boot"] },
    { category: "Frontend", items: ["React", "Vite", "HTML5", "CSS3", "JavaScript", "Bootstrap"] },
    { category: "Database", items: ["MySQL","MongoDB"] },
    { category: "Tools", items: ["Git & GitHub", "Figma", "VS Code"] }
  ];

  return (
    <div className="skills-container">
      <h2 className="section-title">My Technical Skills</h2>
      <div className="skills-grid">
        {skillsData.map((skillCategory) => (
          <div key={skillCategory.category} className="skill-category-card">
            <h3>{skillCategory.category}</h3>
            <div className="skills-list">
              {skillCategory.items.map((skill) => (
                <span key={skill} className="skill-pill">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;