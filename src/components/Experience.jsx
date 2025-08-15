import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <div className="experience-container">
      <h2 className="section-title">Professional Experience</h2>
      <div className="experience-card">
        <h3 className="job-title">Operating Engineer (Apprenticeship)</h3>
        <p className="company-info">
          American Axel Manufacturing | Pune, Maharashtra
        </p>
        <p className="job-duration">
          August 2022 – August 2023
        </p>
        <ul className="job-duties">
          <li>I operate machines with precision ⚙️ and work closely with my team 🤝 to ensure everything runs smoothly. From handling day-to-day operations to managing shift changes efficiently ⏱️.</li>
          <li>I help keep things on track with minimal downtime. My focus is on safety, teamwork, and making sure production stays seamless and efficient 🚀.</li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
