import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll'; // For smooth scrolling
import { useTheme } from '../context/ThemeContext'; // For theme switching
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa'; // Icons
import './Header.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [visitCount, setVisitCount] = useState('...');
  const { theme, toggleTheme } = useTheme();

  // Fetch visitor count logic
  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited');
    // Using your existing endpoint logic
    if (!hasVisited) {
      fetch('https://my-portfolio-backend-app-1-0-0.onrender.com/api/visits', { method: 'POST' })
        .then(response => response.json())
        .then(data => {
          setVisitCount(data.count);
          localStorage.setItem('hasVisited', 'true');
        })
        .catch(err => console.error("Visitor error:", err));
    } else {
      fetch('https://my-portfolio-backend-app-1-0-0.onrender.com/api/visits')
        .then(response => response.json())
        .then(data => setVisitCount(data.count))
        .catch(err => console.error("Visitor fetch error:", err));
    }
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="header">
      <div className="logo-container">
        <div className="logo">Siddhant Kumar</div>
      </div>

      {/* Navigation Menu */}
      <nav className={`navigation ${isOpen ? 'active' : ''}`}>
        <ul className="nav-links">
          <li>
            <Link to="home" smooth={true} duration={500} offset={-70} onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500} offset={-70} onClick={closeMenu}>
              About
            </Link>
          </li>
          <li>
            <Link to="experience" smooth={true} duration={500} offset={-70} onClick={closeMenu}>
              Experience
            </Link>
          </li>
          {/* Added Skills Link */}
          <li>
            <Link to="skills" smooth={true} duration={500} offset={-70} onClick={closeMenu}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={500} offset={-70} onClick={closeMenu}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500} offset={-70} onClick={closeMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* Header Widgets */}
      <div className="header-widgets">
        <div className="visitor-counter" title="Total Visitors">
           Visitors: {visitCount}
        </div>
        
        <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle Theme">
          {theme === 'dark' ? <FaSun className="icon-sun" /> : <FaMoon className="icon-moon" />}
        </button>

        {/* Hamburger Menu Icon (Mobile) */}
        <div className="hamburger" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </header>
  );
}

export default Header;