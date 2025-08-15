import React from 'react';
import './Projects.css';
import portfolioProjectImage from '../assets/portfolio-project.png'; 
import netflixCloneImage from '../assets/netflix-clone.png';

// You can easily add more projects to this array in the future
const projectsData = [
  {
    image:portfolioProjectImage, // Replace with a screenshot of your project
    title: 'Full-Stack Portfolio Website',
    description: 'A personal portfolio built with a React frontend and a Spring Boot backend, featuring a theme switcher, visitor counter, and a functional contact form.',
    technologies: ['React', 'Vite', 'Spring Boot', 'Java', 'MySQL'],
    liveDemo: '#', // Add your live deployed link here
    githubCode: 'https://github.com/Siddhantkr19/PORTFOLIO-BACKEND' // Add the correct repo link
  },
  {
    image: netflixCloneImage, // Replace with a screenshot of your project
    title: 'Netflix Clone Landing Page',
    description: 'A responsive, pixel-perfect clone of the Netflix landing page, built to demonstrate strong foundational skills in HTML5 and CSS3.',
    technologies: ['HTML5', 'CSS3'],
    liveDemo: '#', // Add your live deployed link here
    githubCode: 'https://github.com/Siddhantkr19/Netflix-Clone-Built-with-HTML-CSS'
  },
  // Add your next "hero" project here when it's ready!
];

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <img src={project.image} alt={project.title} className="project-image" />
      <div className="project-info">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <p>Technologies Used : </p>
        <div className="project-tech">
          {project.technologies.map(tech => (
            <span key={tech} className="tech-pill">{tech}</span>
          ))}
        </div>
       <div className="project-links">
    <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="btn">Live Demo</a>
    <a href={project.githubCode} target="_blank" rel="noopener noreferrer" className="btn">GitHub Code</a>
</div>
      </div>
    </div>
  );
}

const Projects = () => {
  return (
    <div className="projects-container">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;