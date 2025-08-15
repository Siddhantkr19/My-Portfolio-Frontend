import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <div className="hero-container">
            <div className="hero-content">
                <h1 className="hero-name">Siddhant Kumar</h1>
                <h2 className="hero-headline">Software Developer | B.Tech in Computer Science</h2>
                <p className="hero-description">
     Hey! 👋 I'm Siddhant Kumar, a software developer passionate about creating user-friendly applications and solving problems through code. 💻✨
                </p>
             <div className="hero-buttons">
    <a href="https://github.com/Siddhantkr19" target="_blank" rel="noopener noreferrer" className="btn">GitHub</a>
    <a href="https://linkedin.com/in/siddhant-kumar-29550828b" target="_blank" rel="noopener noreferrer" className="btn">LinkedIn</a>
    <a href="https://www.geeksforgeeks.org/user/siddhantkot7j/" target="_blank" rel="noopener noreferrer" className="btn">GeeksforGeeks</a>
    <a href="https://leetcode.com/u/Siddhantkumar19/" target="_blank" rel="noopener noreferrer" className="btn">LeetCode</a>
</div>
            </div>
        </div>
    );
};

export default Hero;