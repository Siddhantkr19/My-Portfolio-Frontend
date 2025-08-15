import React from 'react';
import './About.css';
import profilePicPlaceholder from '../assets/profile-placeholder.png'; // We'll add this image

const About = () => {
  return (
    <div className="about-container">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-photo-container">
          {/* We will replace this with your actual photo later */}
          <img src={profilePicPlaceholder} alt="Siddhant Kumar" className="about-photo" />
        </div>
        <div className="about-text">
          <p>
          I'm Pre-final year B.Tech student at UCET Hazaribagh 🎓, driven by a passion for building robust software 🛠️ and solving real-world problems 🌍💡.
          </p>
          <p>  My journey in programming began with C and JAVA, REACT ,Spring Boot.</p>
          <p>
        With experience in both front-end and back-end development, I strive to deliver high-quality code and seamless user experiences. 🚀 I am always eager to learn and grow in my field, staying updated with the latest trends and best practices. 📚🔍

In my free time, I love exploring new technologies, contributing to open-source projects, and sharing my knowledge with others. 🌟🤝 Thank you for visiting my portfolio!
          </p>
         <div className="about-buttons">
    {/* Make sure your CV is in the 'public' folder */}
    <a href="/Siddhant_Kumar_CV.pdf" target="_blank" rel="noopener noreferrer" className="btn">View CV</a>
    <a href="/Siddhant_Certificates.pdf" target="_blank" rel="noopener noreferrer" className="btn">Certificates</a>
</div>
        </div>
      </div>
    </div>
  );
};

export default About;
