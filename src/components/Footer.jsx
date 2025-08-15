import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-contact-info">
          <p>Email: siddhantkumar7488@gmail.com</p>
          <p>Phone: +91 6201179442</p>
        </div>
        <div className="footer-social-links">
          <a href="https://github.com/Siddhantkr19" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub className="footer-icon" />
          </a>
          <a href="https://linkedin.com/in/siddhant-kumar-29550828b" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="footer-icon" />
          </a>
        </div>
        <div className="footer-copyright">
          <p>© {currentYear} Siddhant Kumar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;