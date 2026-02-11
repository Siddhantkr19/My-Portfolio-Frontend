import React from 'react';
import './Projects.css';
import projectImg from '../assets/iwp.png';       // Moved from public to src/assets
import libHubImg from '../assets/libHub.png'; 
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';

// SECTION 1: PRODUCTION GRADE (Top Projects)
const complexProjects = [
  {
    id: 1,
    image: libHubImg, 
    title: 'LibHub | Library Seat Booking',
    description: 'Digitized the manual "visit-and-pay" system, allowing students to book seats online. Architected a Dockerized CI/CD pipeline for zero-downtime deployments and implemented secure JWT/OAuth2 authentication.',
    technologies: ['Java', 'Spring Boot', 'React.js', 'Docker', 'Redis'],
    liveDemo: 'https://libhub.live',
    github: 'https://github.com/Siddhantkr19' 
  },
  {
    id: 2,
    image: projectImg,
    title: 'Internship Portal',
    description: 'A full-stack platform with Role-Based Access Control (Admin/User). Features a secure admin dashboard for managing internship applications and user data, built with a robust Spring Boot backend.',
    technologies: ['React.js', 'Spring Boot', 'MySQL', 'Hibernate'],
    liveDemo: 'https://internshipwithputul.netlify.app/',
    github: 'https://github.com/Siddhantkr19'
  }
];

// SECTION 2: LEARNING JOURNEY (Experiments & Tools)
const learningProjects = [
  {
    id: 100,
    title: 'GitHub Repo Searcher',
    description: 'A robust REST API that searches GitHub repositories, stores them in PostgreSQL with "Upsert" logic, and provides advanced filtering (Stars, Language).',
    technologies: ['Spring Boot', 'PostgreSQL', 'Hibernate', 'TDD'],
    github: 'https://github.com/Siddhantkr19/GitHub_Repository_Searcher'
  },
  {
    id: 101,
    title: 'College Admin Panel (Group)',
    description: 'Built a responsive Admin Panel UI for college administrators using React + Vite. Designed dynamic dashboards and integrated them with a Spring Boot backend.',
    technologies: ['React+Vite', 'Tailwind CSS', 'Spring Boot', 'SQL'],
    github: 'https://github.com/Faiz-Arfi/CollegeWebPage-Frontend'
  },
  {
    id: 102,
    title: 'Spring Boot Doc Scraper',
    description: 'An automation tool built with Selenium and PDFBox that scrapes online handbooks and converts them into a single offline PDF.',
    technologies: ['Java', 'Selenium', 'PDFBox'],
    github: 'https://github.com/Siddhantkr19/SpringBoot-Doc-Scraper'
  },
  {
    id: 103,
    title: 'Netflix Clone UI',
    description: 'A pixel-perfect responsive replica of the Netflix homepage to master CSS Grid, Flexbox, and modern layout techniques.',
    technologies: ['HTML5', 'CSS3'],
    github: 'https://github.com/Siddhantkr19/Netflix-Clone-Built-with-HTML-CSS'
  },
  {
    id: 104,
    title: 'Student Login API',
    description: 'A lightweight REST API for user management. Implemented endpoints for user registration and data fetching to understand backend data flow.',
    technologies: ['Spring Boot', 'SQL', 'Java'],
    github: 'https://github.com/Siddhantkr19/STUDENT-LOGIN'
  },
  {
    id: 105,
    title: 'Java Console Quiz App',
    description: 'A console-based application demonstrating core Object-Oriented Programming (OOP) concepts like Class, Object, and Inheritance.',
    technologies: ['Java', 'OOP', 'Console'],
    github: 'https://github.com/Siddhantkr19/Task-8-Mini-Project-Online-Quiz-App'
  }
];

const Projects = () => {
  return (
    <div className="projects-container">
      
      {/* SECTION 1: PRODUCTION GRADE */}
      <h2 className="section-title">Production-Grade Projects</h2>
      <div className="projects-grid complex-grid">
        {complexProjects.map((project) => (
          <div key={project.id} className="project-card complex-card">
            <div className="project-image-wrapper">
              <img src={project.image} alt={project.title} className="project-image" />
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-pill">{tech}</span>
                ))}
              </div>
              <div className="project-actions">
                {project.liveDemo && (
                  <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="btn btn-sm">
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                )}
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
                  <FaGithub /> Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* SECTION 2: LEARNING JOURNEY */}
      <h2 className="section-title learning-title">Learning Journey & Experiments</h2>
      <div className="projects-grid learning-grid">
        {learningProjects.map((project) => (
          <div key={project.id} className="project-card learning-card">
            <div className="project-content">
                <div className="learning-header">
                    <FaCode className="learning-icon"/>
                    <h3 className="project-title-small">{project.title}</h3>
                </div>
              <p className="project-description-small">{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-pill-small">{tech}</span>
                ))}
              </div>
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="link-text">
                <FaGithub /> View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Projects;