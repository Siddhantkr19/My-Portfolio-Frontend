import React from 'react';
import './About.css';
import aboutImg from '../assets/profile-placeholder1.png'; // Using the image from Hero
import { FaFilePdf, FaCertificate } from 'react-icons/fa';

const About = () => {
  return (
    <div className="about-container">
      <h2 className="section-title">About Me</h2>
      
      <div className="about-content">
        
        {/* Photo Section */}
        <div className="about-photo-container">
          <img src={aboutImg} alt="Siddhant Kumar" className="about-photo" />
        </div>

        {/* Text Section */}
        <div className="about-text">
          <h3 className="about-headline">From Mechanical Engineering to Full Stack Dev 🚀</h3>
          
          <p>
            I am a <strong>Final-Year B.Tech CSE student</strong> at UCET Hazaribagh. 
            [cite_start]My journey is unique—I started in <strong>Mechanical Engineering</strong>[cite: 8], where I developed discipline and analytical thinking, 
            before discovering my true passion for building scalable software.
          </p>
          
          <p>
            Today, I am a <strong>Java Full Stack Developer</strong> driven by logic and performance. 
            [cite_start]I have solved over <strong>750+ DSA problems</strong> [cite: 15] across LeetCode and GFG, demonstrating my strong grasp of 
            complex algorithms. [cite_start]I specialize in building secure backends with <strong>Spring Boot</strong> and dynamic frontends with <strong>React</strong>[cite: 13, 17].
          </p>

          <p>
            Currently, I am exploring <strong>System Design</strong> and Microservices. 
            I am always eager to learn, contribute to open-source, and solve real-world problems through code.
          </p>

          <div className="about-buttons">
            {/* Ensure these PDF files are inside your 'public' folder */}
            <a href="/Siddhant-kumar-Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <FaFilePdf /> View CV
            </a>
            <a href="/Siddhant_Certificates.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              <FaCertificate /> Certificates
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;