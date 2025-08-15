import React from 'react';

import './index.css';
import { useTheme } from './context/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const { theme } = useTheme();

  // This effect updates the body tag's class whenever the theme changes
  React.useEffect(() => {
    document.body.className = '';
    document.body.classList.add(theme);
  }, [theme]);

  // Backend warm-up call on app load
  // useEffect(() => {
  //   fetch('http://localhost:8081/api/contact', {
  //     method: 'GET',
  //     keepalive: true
  //   }).catch(() => {
  //     // Fail silently – backend might still be sleeping
  //   });
  // }, []);


  return (
    <div>
      <Header />
      <main>
        <section id="home"><Hero /></section>
        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects /></section>
        <section id="experience"><Experience /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
    </div>
  );
}

export default App;