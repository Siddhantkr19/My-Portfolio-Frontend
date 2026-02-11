import React from 'react';
import './index.css';
import { useTheme } from './context/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience'; // Moved up
import Skills from './components/Skills';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const { theme } = useTheme();

  // Update body class for Dark/Light mode
  React.useEffect(() => {
    document.body.className = '';
    document.body.classList.add(theme);
  }, [theme]);

  return (
    <div>
      <Header />
      <main>
        <section id="home"><Hero /></section>
        
        {/* Experience Section is now near the top, as requested */}
        <section id="experience"><Experience /></section>
          <section id="projects"><Projects /></section>
        <section id="skills"><Skills /></section>
      
        <section id="about"><About /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
    </div>
  );
}

export default App;