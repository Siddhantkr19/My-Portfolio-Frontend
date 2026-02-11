import React from 'react';
import './Experience.css';
import { FaBriefcase, FaIndustry } from 'react-icons/fa';

const experienceData = [
  {
    id: 1,
    role: "Java Developer Intern",
    company: "Elevate Labs | Remote",
    date: "Nov 2025 – Dec 2025",
    description: "Building secure and scalable backend applications using Core Java and Spring Boot. Focused on REST API development and code optimization.",
    icon: <FaBriefcase />,
    type: "tech"
  },
  {
    id: 2,
    role: "Operating Engineer (Apprenticeship)",
    company: "American Axel Manufacturing | Pune",
    date: "Aug 2022 – Aug 2023",
    description: "Operated machines with precision and collaborated with cross-functional teams to ensure seamless production workflows. Gained discipline and operational efficiency skills.",
    icon: <FaIndustry />,
    type: "core"
  }
];

const Experience = () => {
  return (
    <div className="experience-container">
      <h2 className="section-title">Professional Experience</h2>
      <div className="timeline">
        {experienceData.map((item) => (
          <div key={item.id} className="timeline-item">
            <div className="timeline-icon">
              {item.icon}
            </div>
            <div className="timeline-content">
              <span className="timeline-date">{item.date}</span>
              <h3 className="timeline-role">{item.role}</h3>
              <h4 className="timeline-company">{item.company}</h4>
              <p className="timeline-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;