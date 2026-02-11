import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { SiLeetcode, SiGeeksforgeeks, SiHackerrank } from 'react-icons/si';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="footer-content">
        
        {/* Contact Info */}
        <div className="footer-contact">
          <a href="mailto:siddhantkumar7488@gmail.com" className="contact-link">
            <FaEnvelope /> siddhantkumar7488@gmail.com
          </a>
          <a href="tel:+916201179442" className="contact-link">
            <FaPhoneAlt /> +91 6201179442
          </a>
        </div>

        {/* Social Links */}
        <div className="footer-socials">
          <a href="https://github.com/Siddhantkr19" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/siddhant-kumar-29550828b" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://leetcode.com/u/Siddhantkumar19" target="_blank" rel="noopener noreferrer" aria-label="LeetCode">
            <SiLeetcode />
          </a>
          <a href="https://www.geeksforgeeks.org/profile/siddhantkot7j" target="_blank" rel="noopener noreferrer" aria-label="GeeksForGeeks">
            <SiGeeksforgeeks />
          </a>
          <a href="https://www.hackerrank.com/profile/siddhantkumar741" target="_blank" rel="noopener noreferrer" aria-label="HackerRank">
            <SiHackerrank />
          </a>
        </div>

        {/* Copyright */}
        <div className="footer-copyright">
          <p>© {currentYear} Siddhant Kumar. Built with React & Spring Boot knowledge.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;