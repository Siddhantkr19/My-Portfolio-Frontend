import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll'; // For smooth scrolling
import { useTheme } from '../context/ThemeContext'; // For theme switching
import { FaSun, FaMoon } from 'react-icons/fa'; // Icons for the theme button
import './Header.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [visitCount, setVisitCount] = useState('...');
  const { theme, toggleTheme } = useTheme();

  // Fetch visitor count from the backend when the component loads
useEffect(() => {
  const hasVisited = localStorage.getItem('hasVisited');

  if (!hasVisited) {
    // First-time visitor – increment count
    fetch('https://my-portfolio-backend-app-1-0-0.onrender.com/api/visits', {
      method: 'POST',
    })
      .then(response => response.json())
      .then(data => {
        setVisitCount(data.count);
        localStorage.setItem('hasVisited', 'true'); // Mark user as visited
      })
      .catch(error => console.error("Could not increment visit count:", error));
  } else {
    // Returning visitor – just get the current count
    fetch('https://my-portfolio-backend-app-1-0-0.onrender.com/api/visits')
      .then(response => response.json())
      .then(data => setVisitCount(data.count))
      .catch(error => console.error("Could not fetch visit count:", error));
  }
}, []);


  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="header">
      <div className="logo">Siddhant Kumar</div>
      <nav className="navigation">
        <ul className={isOpen ? 'nav-links open' : 'nav-links'}>
          <li><Link to="home" smooth={true} duration={500} onClick={closeMenu}>Home</Link></li>
          <li><Link to="about" smooth={true} duration={500} onClick={closeMenu}>About</Link></li>
          <li><Link to="projects" smooth={true} duration={500} onClick={closeMenu}>Projects</Link></li>
          <li><Link to="contact" smooth={true} duration={500} onClick={closeMenu}>Contact</Link></li>
        </ul>
      </nav>
      <div className="header-widgets">
        <div className="visitor-counter">Visitors: {visitCount}</div>
        <button onClick={toggleTheme} className="theme-toggle">
          {theme === 'dark' ? <FaSun /> : <FaMoon />}
        </button>
        <div className="hamburger" onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    </header>
  );
}

export default Header;
